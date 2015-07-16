/*
 * Please see the included README.md file for license terms and conditions.
 */

// write code DOWN from here.

(function(global) {

    var SocketConnection = global.SocketConnection = function(server, port) {
        var self = this;
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

    SocketConnection.prototype.setEventHandlers = function() {
        // Socket connection successful
        self.socket.on("connect", self.onSocketConnected);
        // Socket disconnection
        self.socket.on("disconnect", self.onSocketDisconnect);
    };

})(this);
