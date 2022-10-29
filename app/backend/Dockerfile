# FROM node:16.14-alpine
# WORKDIR /app-backend
#  ...

# FROM node:16.14-alpine

# WORKDIR /app-backend

# COPY package*.json .

# RUN npm install

# COPY . . 
 
# CMD ["npm", "start"] 
FROM node:16.14-alpine
WORKDIR /app-backend
COPY . .
EXPOSE 3001
RUN npm install
CMD [ "npm","run", "dev" ]