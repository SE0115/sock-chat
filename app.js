const express = require('express');
const app = express(); 
const http  = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Express work!');
});

server.listen(3000, () => {
    console.log('Express Sever is now listening on localhost:3000..');
});

