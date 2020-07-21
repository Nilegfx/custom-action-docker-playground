FROM node:12.16-alpine3.11
WORKDIR /nile
COPY . .
RUN yarn
ENTRYPOINT [ "node", "index.js" ];