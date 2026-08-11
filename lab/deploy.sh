#!/bin/bash
# deploy.sh — Deploy the SPA application (Next.js static export) to S3 + CloudFront.
#
# Usage: bash deploy.sh
#
# This script:
#   1. Auto-detects AWS region
#   2. Discovers the App-hosting CloudFormation stack and extracts outputs
#   3. Validates the frontend/ directory exists
#   4. Builds the Next.js frontend (static export)
#   5. Syncs the build output to S3
#   6. Invalidates the CloudFront cache
#   7. Outputs the public CloudFront URL on success

set -euo pipefail

###############################################################################
# AWS Credentials — Paste your temporary credentials here
###############################################################################
export AWS_DEFAULT_REGION=
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_SESSION_TOKEN=

###############################################################################
# Configuration
###############################################################################
FRONTEND_DIR="frontend"

###############################################################################
# Color output helpers
###############################################################################
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

info()  { echo -e "${GREEN}▸${NC} $*"; }
warn()  { echo -e "${YELLOW}▸${NC} $*"; }
error() { echo -e "${RED}✗${NC} $*" >&2; }

###############################################################################
# Step 1: Detect AWS region
###############################################################################
detect_region() {
  info "Detecting AWS region..."

  # Use AWS_DEFAULT_REGION if set
  if [ -n "${AWS_DEFAULT_REGION:-}" ]; then
    AWS_REGION="$AWS_DEFAULT_REGION"
    export AWS_REGION
    info "Using region: $AWS_REGION"
    return
  fi

  # Try IMDSv2 with a short timeout (only works on EC2)
  local token
  token=$(curl -s --connect-timeout 2 -X PUT "http://169.254.169.254/latest/api/token" \
    -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" 2>/dev/null) || true

  if [ -n "$token" ]; then
    AWS_REGION=$(curl -s --connect-timeout 2 -H "X-aws-ec2-metadata-token: $token" \
      "http://169.254.169.254/latest/meta-data/placement/region" 2>/dev/null) || true
  fi

  # Fallback: check AWS CLI config
  if [ -z "${AWS_REGION:-}" ]; then
    AWS_REGION="$(aws configure get region 2>/dev/null || echo "")"
  fi

  if [ -z "${AWS_REGION:-}" ]; then
    error "Error: Could not detect AWS region. Set AWS_DEFAULT_REGION in the credentials section at the top of this script."
    exit 1
  fi

  export AWS_REGION
  info "Using region: $AWS_REGION"
}

###############################################################################
# Step 2: Discover App-hosting CloudFormation stack
###############################################################################
discover_stack() {
  info "Discovering App-hosting CloudFormation stack..."

  local stacks
  stacks=$(aws cloudformation describe-stacks \
    --region "$AWS_REGION" \
    --query "Stacks[?Outputs[?OutputKey=='AppBucketName']].StackName" \
    --output text 2>/dev/null) || true

  if [ -z "$stacks" ]; then
    error "Error: Could not find the App-hosting CloudFormation stack. Ensure workshop infrastructure is fully provisioned."
    exit 1
  fi

  # Take the first matching stack
  APP_STACK_NAME=$(echo "$stacks" | awk '{print $1}')
  info "Found stack: $APP_STACK_NAME"

  # Extract outputs
  APP_BUCKET=$(aws cloudformation describe-stacks \
    --stack-name "$APP_STACK_NAME" \
    --region "$AWS_REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='AppBucketName'].OutputValue" \
    --output text)

  DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name "$APP_STACK_NAME" \
    --region "$AWS_REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='DistributionId'].OutputValue" \
    --output text)

  APP_URL=$(aws cloudformation describe-stacks \
    --stack-name "$APP_STACK_NAME" \
    --region "$AWS_REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='AppURL'].OutputValue" \
    --output text)

  if [ -z "$APP_BUCKET" ] || [ "$APP_BUCKET" = "None" ]; then
    error "Error: Could not find the App-hosting CloudFormation stack. Ensure workshop infrastructure is fully provisioned."
    exit 1
  fi

  info "S3 Bucket: $APP_BUCKET"
  info "Distribution ID: $DISTRIBUTION_ID"
  info "App URL: $APP_URL"
}

###############################################################################
# Step 3: Validate source directory
###############################################################################
validate_directories() {
  info "Validating project directories..."

  if [ ! -d "$FRONTEND_DIR" ]; then
    error "Error: Could not find frontend/ directory. Ensure you are in the project root."
    exit 1
  fi

  info "Found frontend/ directory"
}

###############################################################################
# Step 4: Build the Next.js frontend
###############################################################################
build_frontend() {
  info "Building Next.js frontend..."

  # Check next.config for output: 'export'
  local next_config=""
  if [ -f "$FRONTEND_DIR/next.config.ts" ]; then
    next_config="$FRONTEND_DIR/next.config.ts"
  elif [ -f "$FRONTEND_DIR/next.config.js" ]; then
    next_config="$FRONTEND_DIR/next.config.js"
  elif [ -f "$FRONTEND_DIR/next.config.mjs" ]; then
    next_config="$FRONTEND_DIR/next.config.mjs"
  fi

  if [ -n "$next_config" ]; then
    if ! grep -q "output.*export\|output.*'export'\|output.*\"export\"" "$next_config" 2>/dev/null; then
      warn "Warning: $next_config may not have output: 'export' configured."
      warn "For static deployment, add the following to your Next.js config:"
      warn "  const nextConfig = { output: 'export' };"
    fi
  fi

  # Install dependencies and build
  (
    cd "$FRONTEND_DIR"
    info "Installing frontend dependencies..."
    npm install --legacy-peer-deps 2>&1 | tail -5
    info "Running production build..."
    if ! npm run build 2>&1; then
      error "Error: Frontend build failed. Check npm run build output above."
      exit 1
    fi
  )

  # Verify build output exists
  if [ ! -d "$FRONTEND_DIR/out" ]; then
    error "Error: Frontend build failed. The 'out/' directory was not generated."
    error "Ensure next.config.ts has: output: 'export'"
    exit 1
  fi

  info "Frontend build complete (out/ directory ready)"
}

###############################################################################
# Step 5: Sync to S3
###############################################################################
deploy_to_s3() {
  info "Deploying to S3..."

  aws s3 sync "$FRONTEND_DIR/out/" "s3://$APP_BUCKET/" \
    --delete \
    --region "$AWS_REGION" \
    --quiet

  info "Files synced to s3://$APP_BUCKET/"
}

###############################################################################
# Step 6: Invalidate CloudFront cache
###############################################################################
invalidate_cache() {
  info "Invalidating CloudFront cache..."

  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query "Invalidation.Id" \
    --output text \
    --region "$AWS_REGION" >/dev/null 2>&1 || true

  info "Cache invalidation requested"
}

###############################################################################
# Step 7: Output success
###############################################################################
print_success() {
  echo ""
  echo -e "${GREEN}✓ Deployed successfully!${NC}"
  echo -e "  App: ${APP_URL}/"
  echo ""
  echo "Note: CloudFront may take 1-2 minutes to reflect changes on first deploy."
}

###############################################################################
# Main
###############################################################################
main() {
  echo ""
  echo "╔══════════════════════════════════════════╗"
  echo "║   Workshop MVP Cloud Deployment          ║"
  echo "╚══════════════════════════════════════════╝"
  echo ""

  detect_region
  discover_stack
  validate_directories
  build_frontend
  deploy_to_s3
  invalidate_cache
  print_success
}

main "$@"
