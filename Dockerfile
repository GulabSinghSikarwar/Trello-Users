FROM node:latest

WORKDIR /Trello-Users

COPY package.json .

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 8002

CMD ["nodemon", "index.js"]  # Adjust the entry file if needed
