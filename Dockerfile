FROM node:boron

RUN apt-get update && apt-get install stress

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY app.js /usr/src/app/

CMD node app.js
