# Build the web-app
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npx nx build web-app

# Run the web-app
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist/apps/web-app ./

# Install production deps only
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

EXPOSE 4200

CMD ["npx", "next", "start", "-p", "4200"]