FROM node:14

# Create app directory
WORKDIR /Users/AMacADay/Downloads/NoteApp/server_docker

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]