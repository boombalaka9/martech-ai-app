#!/bin/bash
# Test helper: extracts and sources individual functions from deploy.sh
# This allows testing functions in isolation without running the full script.

DEPLOY_SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_SCRIPT="$DEPLOY_SCRIPT_DIR/deploy.sh"

# Define color variables and helper functions used by deploy.sh
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}▸${NC} $*"; }
warn()  { echo -e "${YELLOW}▸${NC} $*"; }
error() { echo -e "${RED}✗${NC} $*" >&2; }

# Configuration variables from deploy.sh
FRONTEND_DIR="frontend"

# Source a specific function from deploy.sh by name
# Usage: source_function "validate_directories"
source_function() {
  local func_name="$1"
  local func_body
  func_body=$(sed -n "/^${func_name}()/,/^}/p" "$DEPLOY_SCRIPT")
  eval "$func_body"
}
