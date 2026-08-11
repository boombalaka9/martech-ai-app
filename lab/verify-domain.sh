#!/bin/bash
# verify-domain.sh — Place the AWS Security Agent domain verification token
# in the S3 bucket so that HTTP_ROUTE verification succeeds.
#
# Usage: bash verify-domain.sh <TOKEN>
#
# The token is provided by AWS Security Agent when you add your CloudFront
# domain as a target for penetration testing.

set -euo pipefail

###############################################################################
# Color output helpers
###############################################################################
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}▸${NC} $*"; }
warn()  { echo -e "${YELLOW}▸${NC} $*"; }
error() { echo -e "${RED}✗${NC} $*" >&2; }

###############################################################################
# Validate input
###############################################################################
TOKEN="${1:-}"

if [ -z "$TOKEN" ]; then
  echo ""
  echo "Usage: bash verify-domain.sh <TOKEN>"
  echo ""
  echo "  TOKEN  The verification token from AWS Security Agent."
  echo "         Find it in the Security Agent console under"
  echo "         Penetration Test → Target Domains → your domain."
  echo ""
  error "Error: No token provided."
  exit 1
fi

###############################################################################
# Detect AWS region
###############################################################################
info "Detecting AWS region..."

AWS_REGION=""

# Use AWS_DEFAULT_REGION if set
if [ -n "${AWS_DEFAULT_REGION:-}" ]; then
  AWS_REGION="$AWS_DEFAULT_REGION"
fi

# Fallback: try AWS CLI config
if [ -z "$AWS_REGION" ]; then
  AWS_REGION="$(aws configure get region 2>/dev/null || echo "")"
fi

# Fallback: try IMDSv2 with a short timeout (only works on EC2)
if [ -z "$AWS_REGION" ]; then
  IMDS_TOKEN=$(curl -s --connect-timeout 2 -X PUT "http://169.254.169.254/latest/api/token" \
    -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" 2>/dev/null) || true

  if [ -n "$IMDS_TOKEN" ]; then
    AWS_REGION=$(curl -s --connect-timeout 2 -H "X-aws-ec2-metadata-token: $IMDS_TOKEN" \
      "http://169.254.169.254/latest/meta-data/placement/region" 2>/dev/null) || true
  fi
fi

if [ -z "$AWS_REGION" ]; then
  error "Error: Could not detect AWS region. Set AWS_DEFAULT_REGION or configure it via 'aws configure'."
  exit 1
fi

export AWS_REGION
info "Using region: $AWS_REGION"

###############################################################################
# Discover App-hosting stack
###############################################################################
info "Discovering App-hosting CloudFormation stack..."

STACKS=$(aws cloudformation describe-stacks \
  --region "$AWS_REGION" \
  --query "Stacks[?Outputs[?OutputKey=='AppBucketName']].StackName" \
  --output text 2>/dev/null) || true

if [ -z "$STACKS" ]; then
  error "Error: Could not find the App-hosting CloudFormation stack."
  error "Ensure the workshop infrastructure is fully provisioned."
  exit 1
fi

APP_STACK_NAME=$(echo "$STACKS" | awk '{print $1}')
info "Found stack: $APP_STACK_NAME"

APP_BUCKET=$(aws cloudformation describe-stacks \
  --stack-name "$APP_STACK_NAME" \
  --region "$AWS_REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='AppBucketName'].OutputValue" \
  --output text)

APP_URL=$(aws cloudformation describe-stacks \
  --stack-name "$APP_STACK_NAME" \
  --region "$AWS_REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='AppURL'].OutputValue" \
  --output text)

if [ -z "$APP_BUCKET" ] || [ "$APP_BUCKET" = "None" ]; then
  error "Error: Could not find AppBucketName in stack outputs."
  exit 1
fi

info "S3 Bucket: $APP_BUCKET"
info "App URL: $APP_URL"

###############################################################################
# Place verification token in S3
###############################################################################
info "Placing verification token in S3 bucket..."

# Create the verification JSON and upload to S3
printf '{"tokens":["%s"]}' "$TOKEN" | aws s3 cp - \
  "s3://$APP_BUCKET/.well-known/aws/securityagent-domain-verification.json" \
  --content-type "application/json" \
  --region "$AWS_REGION"

info "Token uploaded to s3://$APP_BUCKET/.well-known/aws/securityagent-domain-verification.json"

###############################################################################
# Verify the token is accessible
###############################################################################
CLOUDFRONT_DOMAIN=$(echo "$APP_URL" | sed 's|https://||')
VERIFY_URL="https://${CLOUDFRONT_DOMAIN}/.well-known/aws/securityagent-domain-verification.json"

info "Verifying token is accessible..."
warn "Note: CloudFront may take 30-60 seconds to serve new files on first request."

sleep 5

RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$VERIFY_URL" 2>/dev/null) || RESPONSE="000"

if [ "$RESPONSE" = "200" ]; then
  echo ""
  echo -e "${GREEN}✓ Verification token placed successfully!${NC}"
  echo ""
  echo "  Verification URL: $VERIFY_URL"
  echo ""
  echo "  Next steps:"
  echo "  1. Go to the AWS Security Agent console"
  echo "  2. Select your domain in the Target Domains table"
  echo "  3. Choose 'Verify' to complete domain verification"
  echo ""
else
  echo ""
  warn "Token uploaded to S3, but verification URL returned HTTP $RESPONSE."
  warn "This may be due to CloudFront propagation delay."
  echo ""
  echo "  Try manually in 30-60 seconds:"
  echo "  curl $VERIFY_URL"
  echo ""
  echo "  If it still fails, check that the CloudFront distribution is deployed."
  echo ""
fi
