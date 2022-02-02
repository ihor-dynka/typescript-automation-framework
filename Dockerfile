FROM node:14-alpine3.12

RUN mkdir /ts-automation
WORKDIR /ts-automation
COPY . /ts-automation
RUN npm install

CMD ["npm", "run", "apiTest"]