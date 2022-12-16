FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install && NODE_OPTIONS=--openssl-legacy-provider npm run build

CMD ["sh", "-c", "NODE_OPTIONS=--openssl-legacy-provider npm run start"]