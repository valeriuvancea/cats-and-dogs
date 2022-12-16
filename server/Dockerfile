FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build:docker

CMD ["sh", "-c", "NODE_OPTIONS=--openssl-legacy-provider npm run start"]