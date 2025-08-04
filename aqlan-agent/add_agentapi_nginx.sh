#!/bin/bash

# Script to add agentapi location block to Nginx configuration

# Backup current config
sudo cp /etc/nginx/sites-available/aqlaan.com /etc/nginx/sites-available/aqlaan.com.backup-$(date +%Y%m%d-%H%M%S)

# Create the agentapi location block
AGENTAPI_BLOCK='    # Proxy settings for Aqlan Agent API
    location /agentapi/ {
        proxy_pass http://127.0.0.1:8001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
        proxy_buffering off;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

'

# Add the agentapi block before the main location block
sudo sed -i '/# Proxy settings for Next.js/i'"$AGENTAPI_BLOCK" /etc/nginx/sites-available/aqlaan.com

echo "Agentapi location block added to Nginx configuration"
echo "Testing configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "Configuration test passed. Reloading Nginx..."
    sudo systemctl reload nginx
    echo "Nginx reloaded successfully!"
else
    echo "Configuration test failed. Please check the configuration."
fi
