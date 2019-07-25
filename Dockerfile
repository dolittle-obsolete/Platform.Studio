# Build the static content
FROM node:latest AS node-build
COPY ./Source/Web/package.json /app/package.json
WORKDIR /app
RUN yarn

COPY ./Source/Web/. /app
WORKDIR /app
RUN yarn build

# Build runtime image
FROM nginx:1.17.2
WORKDIR /app
COPY --from=node-build /app/build /usr/share/nginx/html