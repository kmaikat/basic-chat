const express = require('express');
const app = express(); // express initializes app to be a function handler that gets supplied to an HTTP server (line 4)
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// route handler for the website homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
});


// server is listening on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});
