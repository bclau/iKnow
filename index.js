/**** REQUIREMENTS ****/

var util = require('util'),	// Utility resources (logging, object inspection, etc)
    io = require('socket.io');	// Socket.IO

/**** UTILITY FUNCTIONS ****/

var generateUUID = function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid.toUpperCase();
}


/*** VARIABLES ****/

var socket;     // Socket controller
var game_sessions = {};
var players = {};
var game_id = generateUUID();
game_sessions[game_id] = [];

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
    
    players[client.id] = client;

	// Listen for client disconnected
	client.on("disconnect", onClientDisconnect);
    
    client.on("hello", onClientHello);
    client.on("game_start", onGameStart);
    client.on("player_answer", onPlayerAnswer);
}

// Socket client has disconnected
function onClientDisconnect() {
	util.log("Player has disconnected: "+this.id);

	// Broadcast removed player to connected socket clients
	this.broadcast.emit("remove_player", {id: this.id});
}

function onClientHello(client) {
    util.log("Client " + this.id +" says hello!");
}

function onGameStart() {
    console.log("Player " + this.id + " wants to join!");
    game_sessions[game_id].push(this.id);
    var question = {question: "Ce faci?", 
                    answers: ['bine', 'foarte bine', 'da', '...?']};
    this.broadcast.emit('game_question', question);
}

function onPlayerAnswer(answer) {
    console.log("Player answered: " + answer);
}

/**** START ***/
init();
