FROM node:14-alpine3.12

COPY . .

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "run", "apiTest" ]