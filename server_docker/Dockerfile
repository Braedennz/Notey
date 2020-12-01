FROM node:14

# Create app directory
WORKDIR /Users/AMacADay/Downloads/NoteApp/server_docker

WORKDIR /usr/src/server
COPY package*.json /usr/src/

RUN npm install -g nodemon
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "start"]