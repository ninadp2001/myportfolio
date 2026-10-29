#!/bin/bash

chmod +x /var/www/portfolio/scripts/install.sh

cd /var/www/portfolio || exit

npm install
npm run build

rm -rf /usr/share/nginx/html/*
cp -r dist/* /usr/share/nginx/html/

systemctl restart nginx