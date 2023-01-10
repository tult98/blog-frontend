FROM node:18.10-alpine3.15

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]