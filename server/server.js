const express = require('express');
//importamos socket.io
const socketIO = require('socket.io');

//socket no trabaja con express
const http = require('http');

const path = require('path');

const app = express();
//creamos un servidor http
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//parte del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

//para saber si alguien mas se conceto
//client trae informacion de quien se conecto


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});