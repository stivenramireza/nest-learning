# Stage 1: Dependencies
FROM node:18-alpine3.15 AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2: Builder
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Stage 3: Runner
FROM node:18-alpine3.15 AS runner
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/static ./static

RUN mkdir -p ./teslo-shop
COPY --from=builder /app/dist/ ./teslo-shop
RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser ./teslo-shop
USER pokeuser

CMD ["node", "dist/main"]
