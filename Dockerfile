FROM node:14-alpine3.12

COPY . .

RUN npm install

EXPOSE 8080

ENV ENVIRONMENT=qa

ENTRYPOINT [ "npm", "run", "apiTest" ]