FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl
RUN corepack enable
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/api/package.json apps/api/package.json
RUN pnpm install --filter @atlas/api --prod=false
COPY apps/api apps/api
RUN pnpm --filter @atlas/api prisma:generate && pnpm --filter @atlas/api build

FROM node:22-alpine AS runner
WORKDIR /app
RUN apk add --no-cache openssl
ENV NODE_ENV=production
RUN corepack enable

COPY package.json pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/package.json
RUN pnpm install --filter @atlas/api --prod

COPY --from=base /app/apps/api/dist ./apps/api/dist
COPY --from=base /app/apps/api/prisma ./apps/api/prisma
RUN cd apps/api && npx prisma@5 generate
EXPOSE 4000
CMD ["node", "apps/api/dist/index.js"]
