# FROM node:16.14-alpine
# WORKDIR /app-frontend
#  ...

FROM node:16.14-alpine

EXPOSE 3000

ADD node_modules.tar.gz .

WORKDIR /app-frontend
COPY . . 

RUN npm install

ENTRYPOINT ["npm", "start"]∆