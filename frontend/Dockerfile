FROM node:alpine as build

COPY package.json package.json
RUN yarn

COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.config /etc/conf.d/default.conf
EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]