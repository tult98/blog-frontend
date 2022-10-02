FROM node:18.10-alpine3.15

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY entrypoint.sh /scripts/entrypoint.sh
RUN ["chmod", "+x", "/scripts/entrypoint.sh"]

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "/scripts/entrypoint.sh" ]