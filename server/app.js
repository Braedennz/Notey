const express = require('express');

const app = express();

var http = require('http').createServer(app);

var io = require('socket.io')(http, { origins: '*:*'});

const routes = require('./routes');
app.use('/api', routes)

const PORT = 4000;

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

let textData = null;

io.on('connection', (socket) => { 
    console.log('new client connected');

    if (textData) {
        socket.emit('set-text', textData);
    }

    socket.on('update-text', data => {
        textData = JSON.stringify(data);
        //socket.emit('updated-text', data);
    });

    socket.on('disconnect', () => {
        console.log("Client disconnected");
    });
});