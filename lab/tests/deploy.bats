#!/usr/bin/env bats
# Unit tests for deploy.sh logic
# Tests: directory detection, CloudFormation output parsing, error messages, success output

setup() {
  # Create a temporary working directory for each test
  TEST_DIR="$(mktemp -d)"
  export TEST_DIR

  # Create a mock bin directory and put it first in PATH
  MOCK_BIN="$TEST_DIR/mock_bin"
  mkdir -p "$MOCK_BIN"
  export ORIG_PATH="$PATH"
  export PATH="$MOCK_BIN:$PATH"

  # Load the test helper (defines color vars, helper functions, source_function)
  load test_helper

  # Source the functions we need for testing
  source_function "validate_directories"
  source_function "discover_stack"
  source_function "detect_region"
  source_function "print_success"
}

teardown() {
  rm -rf "$TEST_DIR"
  export PATH="$ORIG_PATH"
}

# ===========================================================================
# Test: Frontend directory detection (present/absent)
# ===========================================================================

@test "validate_directories exits with error when frontend/ is missing" {
  cd "$TEST_DIR"

  run validate_directories

  [ "$status" -eq 1 ]
  [[ "$output" == *"Could not find frontend/ directory"* ]]
}

@test "validate_directories succeeds when frontend/ is present" {
  cd "$TEST_DIR"
  mkdir -p frontend

  run validate_directories

  [ "$status" -eq 0 ]
  [[ "$output" == *"Found frontend/ directory"* ]]
}

# ===========================================================================
# Test: CloudFormation stack output parsing
# ===========================================================================

@test "discover_stack parses AppBucketName from CloudFormation outputs" {
  # Create mock aws that returns expected outputs
  cat > "$MOCK_BIN/aws" << 'EOF'
#!/bin/bash
if [[ "$*" == *"AppBucketName"*"StackName"* ]]; then
  echo "my-app-stack"
elif [[ "$*" == *"AppBucketName"*"OutputValue"* ]]; then
  echo "my-workshop-bucket-123456"
elif [[ "$*" == *"DistributionId"*"OutputValue"* ]]; then
  echo "E1234567890ABC"
elif [[ "$*" == *"AppURL"*"OutputValue"* ]]; then
  echo "https://d1234567890.cloudfront.net"
fi
EOF
  chmod +x "$MOCK_BIN/aws"

  export AWS_REGION="us-east-1"
  run discover_stack

  [ "$status" -eq 0 ]
  [[ "$output" == *"S3 Bucket: my-workshop-bucket-123456"* ]]
}

@test "discover_stack parses AppURL from CloudFormation outputs" {
  cat > "$MOCK_BIN/aws" << 'EOF'
#!/bin/bash
if [[ "$*" == *"AppBucketName"*"StackName"* ]]; then
  echo "my-app-stack"
elif [[ "$*" == *"AppBucketName"*"OutputValue"* ]]; then
  echo "my-workshop-bucket-123456"
elif [[ "$*" == *"DistributionId"*"OutputValue"* ]]; then
  echo "E1234567890ABC"
elif [[ "$*" == *"AppURL"*"OutputValue"* ]]; then
  echo "https://d1234567890.cloudfront.net"
fi
EOF
  chmod +x "$MOCK_BIN/aws"

  export AWS_REGION="us-east-1"
  run discover_stack

  [ "$status" -eq 0 ]
  [[ "$output" == *"App URL: https://d1234567890.cloudfront.net"* ]]
}

@test "discover_stack parses DistributionId from CloudFormation outputs" {
  cat > "$MOCK_BIN/aws" << 'EOF'
#!/bin/bash
if [[ "$*" == *"AppBucketName"*"StackName"* ]]; then
  echo "my-app-stack"
elif [[ "$*" == *"AppBucketName"*"OutputValue"* ]]; then
  echo "my-workshop-bucket-123456"
elif [[ "$*" == *"DistributionId"*"OutputValue"* ]]; then
  echo "E1234567890ABC"
elif [[ "$*" == *"AppURL"*"OutputValue"* ]]; then
  echo "https://d1234567890.cloudfront.net"
fi
EOF
  chmod +x "$MOCK_BIN/aws"

  export AWS_REGION="us-east-1"
  run discover_stack

  [ "$status" -eq 0 ]
  [[ "$output" == *"Distribution ID: E1234567890ABC"* ]]
}

@test "discover_stack exits with error when no stack is found" {
  cat > "$MOCK_BIN/aws" << 'EOF'
#!/bin/bash
echo ""
EOF
  chmod +x "$MOCK_BIN/aws"

  export AWS_REGION="us-east-1"
  run discover_stack

  [ "$status" -eq 1 ]
  [[ "$output" == *"Could not find the App-hosting CloudFormation stack"* ]]
}

@test "discover_stack exits with error when AppBucketName is empty" {
  cat > "$MOCK_BIN/aws" << 'EOF'
#!/bin/bash
if [[ "$*" == *"AppBucketName"*"StackName"* ]]; then
  echo "my-app-stack"
elif [[ "$*" == *"AppBucketName"*"OutputValue"* ]]; then
  echo "None"
elif [[ "$*" == *"DistributionId"*"OutputValue"* ]]; then
  echo "E1234567890ABC"
elif [[ "$*" == *"AppURL"*"OutputValue"* ]]; then
  echo "https://d1234567890.cloudfront.net"
fi
EOF
  chmod +x "$MOCK_BIN/aws"

  export AWS_REGION="us-east-1"
  run discover_stack

  [ "$status" -eq 1 ]
  [[ "$output" == *"Could not find the App-hosting CloudFormation stack"* ]]
}

# ===========================================================================
# Test: Error message formatting for each failure mode
# ===========================================================================

@test "error message for missing frontend matches design error table" {
  cd "$TEST_DIR"

  run validate_directories

  [ "$status" -eq 1 ]
  [[ "$output" == *"Error: Could not find frontend/ directory. Ensure you are in the project root."* ]]
}

@test "error message for missing stack matches design error table" {
  cat > "$MOCK_BIN/aws" << 'EOF'
#!/bin/bash
echo ""
EOF
  chmod +x "$MOCK_BIN/aws"

  export AWS_REGION="us-east-1"
  run discover_stack

  [ "$status" -eq 1 ]
  [[ "$output" == *"Error: Could not find the App-hosting CloudFormation stack. Ensure workshop infrastructure is fully provisioned."* ]]
}

@test "error message for region detection failure" {
  # Mock curl to return nothing
  cat > "$MOCK_BIN/curl" << 'EOF'
#!/bin/bash
echo ""
EOF
  chmod +x "$MOCK_BIN/curl"

  # Mock aws configure to fail
  cat > "$MOCK_BIN/aws" << 'EOF'
#!/bin/bash
if [[ "$*" == *"configure get region"* ]]; then
  exit 1
fi
echo ""
EOF
  chmod +x "$MOCK_BIN/aws"

  unset AWS_REGION
  unset AWS_DEFAULT_REGION
  run detect_region

  [ "$status" -eq 1 ]
  [[ "$output" == *"Error: Could not detect AWS region"* ]]
}

# ===========================================================================
# Test: URL output format on success
# ===========================================================================

@test "print_success outputs deployed successfully message" {
  APP_URL="https://d1234567890.cloudfront.net"
  run print_success

  [ "$status" -eq 0 ]
  [[ "$output" == *"Deployed successfully!"* ]]
}

@test "print_success outputs app URL" {
  APP_URL="https://d1234567890.cloudfront.net"
  run print_success

  [ "$status" -eq 0 ]
  [[ "$output" == *"App: https://d1234567890.cloudfront.net/"* ]]
}

@test "print_success includes CloudFront propagation note" {
  APP_URL="https://example.cloudfront.net"
  run print_success

  [ "$status" -eq 0 ]
  [[ "$output" == *"CloudFront may take 1-2 minutes"* ]]
}
