const SocketServer = require('./models/Server')

const serverInstance = new SocketServer()

serverInstance.get()
serverInstance.connection()
serverInstance.listen()

