#!/bin/bash
set -euo pipefail

npm ci
npm run build

mkdir -p /out
cp -r dist/client/* /out/
