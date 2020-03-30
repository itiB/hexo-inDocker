FROM node:alpine

WORKDIR /hexo

RUN \
  apk add --no-cache git openssh-client \
  && npm config set unsafe-perm true \
  && npm install -g hexo-cli \
  && npm install hexo-deployer-git --save \
  && npm install hexo-admin --save
