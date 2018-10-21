FROM node:8-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app

CMD node index.js

EXPOSE 1337