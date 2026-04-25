#!/bin/bash
set -euo pipefail

npm ci
NODE_ENV=production npm run build

mkdir -p /out
cp -r dist/client/* /out/
