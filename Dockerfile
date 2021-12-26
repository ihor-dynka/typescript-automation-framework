FROM node:14-alpine3.12

COPY . .

RUN npm install

ENV ENVIRONMENT qa
ENV BROWSER chrome
ENV REMOTE_BROWSER_ENABLE true

EXPOSE 8080

ENTRYPOINT [ "npm", "run", "apiTest" ]