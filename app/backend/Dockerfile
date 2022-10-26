# FROM node:16.14-alpine
# WORKDIR /app-backend
#  ...

FROM node:16.14-alpine

WORKDIR /app-backend

ADD node_modules.tar.gz .

COPY . . 

EXPOSE 3001

RUN npm install
 
ENTRYPOINT ["npm", "start"] 