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

function myEventHandler() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!" ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

    alert(str) ;
}

function violateMe(answer) {
    //alert("Sorry dude, you submitted your answer now! It is: " + answer.value);
    if (answer.value === "yes") {
        alert("Duuuuuuuuude, you are good!!");
    } else {
        alert(":'-(");
    }
}

// ...additional event handlers here...

function displayUsernameAndScore(){
    var name = "username";
    var score = 9999;
    
    document.getElementById("popup").style.display = 'block';
    // alert(name +"\n"+score);
    // Custom namespace
    
}

function hidePopup(){
      document.getElementById("popup").style.display = 'none';
}

 $(document).click(function() {
   document.getElementById("popup").style.display = 'none';
 })

 $('#popup').click(function(e){
     e.stopPropagation();
 });