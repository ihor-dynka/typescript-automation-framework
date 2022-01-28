FROM node:14-alpine3.12

EXPOSE 8080

RUN mkdir /ts-automation
WORKDIR /ts-automation
COPY . /ts-automation
RUN npm install

ENTRYPOINT ["npm", "run", "apiTest"]