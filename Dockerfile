FROM node:18-alpine AS builder
WORKDIR /app

# Install all dependencies and build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built application and production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Change ownership
RUN chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]