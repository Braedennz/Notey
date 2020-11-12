const express = require('express');

const app = express();

var http = require('http').createServer(app);

var io = require('socket.io')(http);

const routes = require('./routes');
app.use('/api', routes)

const PORT = 4000;

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => { 
    console.log('new client connected');
});