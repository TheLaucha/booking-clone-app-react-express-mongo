FROM node:16-bullseye

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8800

CMD [ "npm", "start" ]
