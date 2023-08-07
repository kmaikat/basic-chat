const express = require('express');
const app = express(); // express initializes app to be a function handler that gets supplied to an HTTP server (line 4)
const http = require('http');
const server = http.createServer(app);

// route handler for the website homepage
app.get('/', (req, res) => {
    res.send('<h1>Hello world!!!!!!!!!!! 😀 </h1>');
});

// server is listening on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});
