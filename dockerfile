# Build image
FROM node:lts AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install -g npm@latest
RUN npm ci --omit=dev
 
# Production image
FROM node:lts-alpine3.16
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app

CMD ["dumb-init", "node", "app"]
