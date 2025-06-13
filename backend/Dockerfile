
FROM node:alpine


ARG PORT=3000


WORKDIR /app


COPY ./backend/package*.json /app

RUN npm install

EXPOSE $PORT

CMD ["npm", "run", "dev"]