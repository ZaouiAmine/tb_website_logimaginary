#!/bin/bash
set -euo pipefail

npm ci
NODE_ENV=production npm run build

mkdir -p /out
cp -r dist/client/* /out/
# TanStack Start SPA shell is written as `_shell.html`; static hosts need `index.html` at `/`.
if [[ -f /out/_shell.html ]]; then
  cp /out/_shell.html /out/index.html
fi
