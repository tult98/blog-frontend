# stage 1: install dependencies
FROM node:18.10-alpine3.15 AS deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN yarn install

# stage 2: build
FROM node:18.10-alpine3.15 AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY src ./src
COPY styles ./styles
COPY public ./public
COPY pages ./pages
COPY package.json next.config.js tsconfig.json tailwind.config.js postcss.config.js ./
RUN yarn build

# stage 3: run
FROM node:18.10-alpine3.15
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./
CMD [ "yarn", "start" ]
