/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.



function init_game() {
    window.app.initialise()
    window.app.gotoState("mainMenu");
    window.app.gotoState("game");
    
    var server_connection = SocketConnection(LOCATION, PORT);
}

// ...additional event handlers here...
