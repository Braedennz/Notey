/**
 * Module dependencies.
 */

const app = require('./app')
const http = require('http')

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8080')
app.set('port', port)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)

server.on('error', onError)
server.on('listening', onListening)

/**
 * Listen for socket connections
 */
const socketio = require('socket.io')
const io = socketio(server, { origins: '*:*' })

const connections = []

let textData = null

io.on('connection', (socket) => {
	connections.push(socket)

	console.log(`client connected, ${connections.length} sockets are connected`)

	if (textData) {
		socket.emit('set-text', textData)
	}

	socket.on('update-text', (data) => {
		textData = JSON.stringify(data)
		//socket.emit('updated-text', data);
	})

	socket.on('disconnect', () => {
		connections.splice(connections.indexOf(socket), 1)

		console.log(
			`client disconnected, ${connections.length} sockets are connected`
		)
	})
})

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	let port = parseInt(val, 10)

	if (isNaN(port)) {
		// named pipe
		return val
	}

	if (port >= 0) {
		// port number
		return port
	}

	return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error
	}

	let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges')
			process.exit(1)
		case 'EADDRINUSE':
			console.error(bind + ' is already in use')
			process.exit(1)
		default:
			throw error
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	let addr = server.address()
	let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

	console.log('Listening on ' + bind)
}
