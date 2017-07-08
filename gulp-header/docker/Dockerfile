FROM node:latest

WORKDIR /app

COPY ./src/ /app/
COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN npm cache clean
RUN yarn

CMD [ "yarn", "run", "start" ]