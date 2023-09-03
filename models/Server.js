const express = require('express')
const http = require('http');
const socketIO = require('socket.io');


class Server {


    constructor(){
        this.app = express()
        this.server = http.createServer( this.app )
        this.io = socketIO( this.server )
        this.port = process.env.PORT || '3000'

        this.middlewares()
    }


    middlewares(){
        this.app.use( express.json() )
        this.app.use( express.static('public'))
    }


    listen(){
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port )
        })
    }

}



module.exports = Server 