FROM node:18.10-alpine3.15

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]