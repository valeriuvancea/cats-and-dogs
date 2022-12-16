FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
RUN npm install -g netlify-lambda

CMD ["sh", "-c", "NODE_OPTIONS=--openssl-legacy-provider npm run start"]