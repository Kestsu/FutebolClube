# FROM node:16.14-alpine
# WORKDIR /app-frontend
#  ...

FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package.json ./
EXPOSE 3000

RUN npm install

COPY . . 
 
CMD ["npm", "start"]
