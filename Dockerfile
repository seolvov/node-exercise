FROM node:16

WORKDIR /data/node_mongo/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 9091

CMD ["nodemon", "-L", "index.js"]
