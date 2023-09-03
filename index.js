console.log('prueba');

const Server = require('./models/Server')



const server = new Server()
server.listen()


module.exports = server.io


