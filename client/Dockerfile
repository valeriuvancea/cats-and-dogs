FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/public .
COPY ./set-env.sh ./set-env.sh
RUN chmod +x ./set-env.sh
CMD ["sh", "-c", "./set-env.sh && nginx -g 'daemon off;'"]