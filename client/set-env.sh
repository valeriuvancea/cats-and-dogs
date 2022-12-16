#!/bin/sh

if [ -n "$GRAPHQL_BACKEND_URL" ]; then
sed -i -e "s|{}.GRAPHQL_BACKEND_URL|'$GRAPHQL_BACKEND_URL'|g" /usr/share/nginx/html/*.js
fi
