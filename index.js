/**** REQUIREMENTS ****/

var util = require('util'),	// Utility resources (logging, object inspection, etc)
    io = require('socket.io');	// Socket.IO

console.log("something");
console.log(io);

/*** VARIABLES ****/

var socket;     // Socket controller

/**** FUNCTIONS ****/

function init() {
	// Set up Socket.IO to listen on port 9001 (IT'S OVER 9000!!!)
	socket = io.listen(9001);

	// Configure Socket.IO
	socket.configure(function() {
		// Only use WebSockets
		socket.set("transports", ["websocket"]);

		// Restrict log output
		socket.set("log level", 2);
	});

	// Start listening for events
	setEventHandlers();
}

/**** EVENT HANDLERS ****/

function setEventHandlers() {
	// Socket.IO
	socket.on("connection", onSocketConnection);
}

// New socket connection
function onSocketConnection(client) {
    // this will be called when a new client connects.
    // this will setup different event listeners.
	util.log("New player has connected: " + client.id);

	// Listen for client disconnected
	client.on("disconnect", onClientDisconnect);
    
    client.on("hello", onClientHello);
}

// Socket client has disconnected
function onClientDisconnect() {
	util.log("Player has disconnected: "+this.id);

	// Broadcast removed player to connected socket clients
	this.broadcast.emit("remove_player", {id: this.id});
}

function onClientHello(client) {
    util.log("Client " + client.id +" says hello!");
    util.log(client);
}

/**** START ***/
init();
