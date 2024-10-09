// before rum
//npm install express

// to run 
// npm start

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const OS = require('os');
const ENV = 'DEV';

const http = require("http");
const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.end("<html><body><h1>Hello, World!</h1></body></html");
})

server.listen(port, hostname);

// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from Node!';
  res.send(msg);
});

app.get('/test', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from /test Node!';
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
