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

class SocketServer {

    constructor(){
        this.users = []
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

            socket.on('login', (username) => {
            
                if ( this.users.find( userObj => userObj.username === username) ) {
                    socket.emit('usernameTaken', `${username} is already taken!`);
                } else {
                    const user = { id: socket.id, username: username, color: this.getRandomColor() }
                    this.users.push(user);
                    socket.emit('userConnected', this.users);
                    socket.broadcast.emit('userConnected', this.users);
                }

            })

            socket.on('disconnect', () => {
                console.log('user disconnected');
                const userIndex = this.users.findIndex( userObj => userObj.id === socket.id );
                this.users.splice(userIndex, 1);
                socket.broadcast.emit('userDisconnected', this.users);

              })


            socket.on('chat message', (msg) => {
                socket.broadcast.emit('chat message', msg);
                // console.log("Message to all clients:", msg);
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

    getRandomColor() {
        // Generate a random hex color
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

}



module.exports = SocketServer