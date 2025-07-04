# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy the full monorepo
COPY . .

# Install dependencies at the root
RUN npm install

# Build the API app
RUN npx nx build api

# Stage 2: Run
FROM node:18-alpine

WORKDIR /app

# Copy build output
COPY --from=builder /app/dist/apps/api ./

# Install production dependencies only (optional)
COPY package*.json ./
RUN npm install --omit=dev

# Start the server
CMD ["node", "main.js"]