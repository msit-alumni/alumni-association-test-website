FROM node:16.4.2

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 5000

CMD [ "node","src/app.js" ]