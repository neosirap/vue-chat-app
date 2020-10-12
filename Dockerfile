# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm run install:chat-app
COPY . .
RUN npm run build:chat-app

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/packages/chat-app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]