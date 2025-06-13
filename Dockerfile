FROM node:alpine

ARG PORT=3000

WORKDIR /app

COPY ./package*.json ./

RUN npm install

EXPOSE $PORT

CMD ["node", "main.js"]