# Stage 1: Build dependencies
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY app.js .


# Stage 2: Final application image
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/app.js ./

EXPOSE 3000

CMD ["node", "app.js"]