# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

FROM base AS dev
EXPOSE 3000 9229
ENV NODE_ENV=development
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=bind,source=./app,target=./app \
    npm ci --include=dev && \
    mkdir /usr/src/app/.next && \
    chown -R node:node /usr/src/app/.next
USER node
COPY . .