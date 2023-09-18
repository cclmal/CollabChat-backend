const express = require('express')
const http = require('http')
const { createServer } = require('node:http')
const { join } = require('node:path')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer( app )
const port = process.env.PORT || '3001'
const io = new Server(server);


class Servidor {

    // constructor(app, server, port, io){
    //     this.middlewares()
    // }
    
    get(){
        app.get('/', (req, res) => {
            res.sendFile('/index.html', { root: `${process.cwd()}` });
          });
    }

    connection(){
        io.on('connection', (socket) => {
            console.log('a user connected') 
            // socket.on('disconnect', () => {
            //     console.log('user disconnected');
            //   })
            socket.on('chat message', (msg) => {
                io.emit('chat message', msg);
              }); 
          });
    }

    middlewares(){
        app.use( express.json() )
        app.use( express.static('public'))
    }

    listen(){
        server.listen( port, () => {
            console.log('Servidor corriendo en el puerto', port )
        })
    }

}



module.exports = Servidor