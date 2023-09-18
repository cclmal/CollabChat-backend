console.log('prueba');

let server = require('./models/Server')

let serverInstance = new server()

serverInstance.get()

serverInstance.connection()

serverInstance.listen()

// module.exports = server.io


