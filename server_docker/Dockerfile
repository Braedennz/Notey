FROM node:14

# Create app directory
WORKDIR /Users/AMacADay/Downloads/NoteApp/server_docker

WORKDIR /usr/src/server
COPY ./package*.json /usr/src/

RUN npm install -g nodemon
RUN npm install

EXPOSE 8080

COPY ./docker-entrypoint.sh /usr/src/docker-entrypoint.sh

RUN chmod +x /usr/src/docker-entrypoint.sh

ENTRYPOINT ["/usr/src/docker-entrypoint.sh"]