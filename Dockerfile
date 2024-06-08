FROM node:22-alpine3.19
EXPOSE 9000
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
CMD [ "npm", "run", "start:dev" ]
