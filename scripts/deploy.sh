#!/usr/bin/env bash
# Build locally and deploy the standalone bundle to the VPS.
# Usage: ./scripts/deploy.sh [server_user@host]
#
# Prerequisite: SSH access to the server (key-based auth recommended).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SERVER="${1:-root@165.22.112.111}"
APP_DIR="/var/www/italian-fabrics"
TMP_ARCHIVE="/tmp/italian-fabrics-deploy.tar.gz"

cd "$ROOT"

echo "→ Building..."
npm run build

echo "→ Packing standalone bundle..."
rm -rf deploy-bundle
mkdir -p deploy-bundle
cp -r .next/standalone/. deploy-bundle/
cp -r .next/static deploy-bundle/.next/static
cp -r public deploy-bundle/public

tar -czf "$TMP_ARCHIVE" -C deploy-bundle .

echo "→ Uploading to $SERVER..."
scp "$TMP_ARCHIVE" "$SERVER:/tmp/italian-fabrics-deploy.tar.gz"

echo "→ Installing on server..."
ssh "$SERVER" bash -s <<EOF
set -euo pipefail
mkdir -p "$APP_DIR"
cd "$APP_DIR"
find . -mindepth 1 -maxdepth 1 -exec rm -rf {} +
tar -xzf /tmp/italian-fabrics-deploy.tar.gz
rm -f /tmp/italian-fabrics-deploy.tar.gz

cat > ecosystem.config.cjs <<'PM2'
module.exports = {
  apps: [{
    name: 'italianfabrics',
    script: 'server.js',
    cwd: '$APP_DIR',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
      HOSTNAME: '0.0.0.0',
      NEXT_PUBLIC_SITE_URL: 'https://italianfabrics.uz'
    }
  }]
};
PM2

pm2 restart italianfabrics 2>/dev/null || pm2 start ecosystem.config.cjs
pm2 save
echo "✓ Deployed to $APP_DIR"
EOF

rm -f "$TMP_ARCHIVE"
echo "✓ Done — https://italianfabrics.uz"
