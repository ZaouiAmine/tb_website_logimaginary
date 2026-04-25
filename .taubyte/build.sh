#!/bin/bash
set -euo pipefail

export NODE_ENV=production

npm ci
npm run build

mkdir -p /out
cp -r dist/client/* /out/
