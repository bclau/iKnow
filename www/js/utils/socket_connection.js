/*
 * Please see the included README.md file for license terms and conditions.
 */

// write code DOWN from here.

(function(global) {

    var SocketConnection = global.SocketConnection = function(server, port) {
        self = this;
        self.server = location;
        self.port = port;

        // init socket.
        self.socket = io.connect(server, {port: port, transports: ['websocket']});
    };

    // Socket connected
    SocketConnection.prototype.onSocketConnected = function() {
        console.log("Connected to socket server");
    };

    // Socket disconnected
    SocketConnection.prototype.onSocketDisconnect = function() {
        console.log("Disconnected from socket server");
    };
    
    
    // other messages / events sent by the server.
    SocketConnection.prototype.onQuestionReceive = function(question) {
      console.log("Received question: " + question);  
    };
    
    // actions that can be sent by the client.
    SocketConnection.prototype.startGame = function () {
        console.log("Requesting the server to start a game...");
        self.socket.emit('game_start', {})
    };
    
    SocketConnection.prototype.sendAnswer = function(answer) {
        console.log("Sending answer: " + answer);
        self.socket.emit("game_answer", answer);
    };

    SocketConnection.prototype.setEventHandlers = function() {
        // Socket connection successful
        self.socket.on("connect", self.onSocketConnected);
        // Socket disconnection
        self.socket.on("disconnect", self.onSocketDisconnect);
        
        // submit question
        self.socket.on("game_question", self.onQuestionReceive);
    };

})(this);
