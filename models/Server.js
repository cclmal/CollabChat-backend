const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer( app )
const port = process.env.PORT || '3000'
const io = new Server(server, {
    cors: {
      origin: "*",  // Permite conexiones desde cualquier origen
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });


class Servidor {

    constructor(app, server, port, io){
        this.middlewares()
    }
    
    get(){
        app.get('/', (req, res) => {
            res.sendFile('/index.html', { root: `${process.cwd()}` });
          });
    }

    connection(){
        io.on('connection', (socket) => {
            console.log('a user connected') 
            socket.on('disconnect', () => {
                console.log('user disconnected');
              })
            socket.on('chat message', (msg) => {
                console.log("Mensaje recibido:", msg);
                socket.broadcast.emit('chat message', msg);
                console.log("Mensaje emitido a todos los clientes:", msg);
              }); 
          });
    }

    middlewares(){
        app.use( express.json() )
        app.use( express.static('public'))
        app.use( cors() )

    }

    listen(){
        server.listen( port, () => {
            console.log('Servidor corriendo en el puerto', port )
        })
    }

}



module.exports = Servidor