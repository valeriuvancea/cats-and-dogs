FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build

CMD ["sh", "-c", "npm run start"]