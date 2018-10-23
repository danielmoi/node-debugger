# FROM node:8-alpine
FROM node:8

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app

RUN mkdir -p /opt/watchexec \
    && curl -SL https://github.com/mattgreen/watchexec/releases/download/1.8.6/watchexec-1.8.6-x86_64-unknown-linux-gnu.tar.gz \
    | tar zx -C /opt/watchexec \
    && ln -fs /opt/watchexec/watchexec-1.8.6-x86_64-unknown-linux-gnu/watchexec /usr/local/bin/watchexec


EXPOSE 1337

CMD node index.js