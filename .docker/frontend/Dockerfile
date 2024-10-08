from node:20.10

WORKDIR /app

COPY ./frontend/package.json ./

COPY ./frontend/src/images/ ./images/

RUN npm install

expose 3001

CMD [ "npm", "start" ]
