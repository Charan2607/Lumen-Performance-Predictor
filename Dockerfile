# Dockerfile for Lumen Performance Predictor
FROM node:18-alpine AS build
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary artifacts
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.output ./.output
COPY --from=build /app/public ./public

EXPOSE 3000
ENV PORT=3000
CMD ["node", ".output/server/index.mjs"]
