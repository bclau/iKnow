/*
 * Please see the included README.md file for license terms and conditions.
 */

// write code DOWN from here.

window.app = window.app || {} ;         // there should only be one of these...

(function(application)
{
    "use strict";
    
    // constants.
    var SHOW = 'block';
    var HIDDEN = 'none';
    
    
    var _setVisibility = function(state, visibility) {
        // state should be a string, containing a name.
        // it should be used for reffering to the HTML's document element.
        var element = document.getElementById(state);
        
        if (element) {
            // element exists. set the display style to visible.
            element.style.display = visibility;
        } else {
            // element not found. problems? should be logged.
            console.error('Problems! The state "' + state + '" does not have a document element!');
        }
    };
    
    var showState = function(state) {
        _setVisibility(state, SHOW);   
    };
    
    var hideState = function(state) {
        _setVisibility(state, HIDDEN);   
    };
    
    // creates the functions that will be called for entering / exiting a state.
    var _mainMenuEntry = function() {
        showState('mainMenu');
    };
    
    var _mainMenuExit = function() {
        hideState('mainMenu');
    };
    
    var _gameEntry = function() {
        showState('game');  
    };
    
    var _gameExit = function() {
        hideState('game');  
    };
    var _settingsEntry = function() {
        showState('settings');  
    };
    
    var _settingsExit = function() {
        hideState('settings');  
    };
    
    var _aboutUsEntry = function() {
        showState('aboutUs');  
    };
    
    var _aboutUsExit = function() {
        hideState('aboutUs');  
    };
    
     var _leaderboardEntry = function() {
        showState('leaderboard');  
    };
    
    var _leaderboardExit = function() {
        hideState('leaderboard');  
    };
    
    // create the state machine.
    var stateModel = new fsm.StateMachine('states');
    
    // create the states for the state machines.
    var initial = new fsm.PseudoState('initial', stateModel, fsm.PseudoStateKind.Initial);
    var mainMenu = new fsm.State('mainMenu', stateModel).entry(_mainMenuEntry)
                                                        .exit(_mainMenuExit);
    var game = new fsm.State('game', stateModel).entry(_gameEntry)
                                                .exit(_gameExit);
    
    var settings = new fsm.State('settings', stateModel).entry(_settingsEntry)
                                                .exit(_settingsExit);
    
    var aboutUs = new fsm.State('aboutUs', stateModel).entry(_aboutUsEntry)
                                                .exit(_aboutUsExit);
    
    var leaderboard = new fsm.State('leaderboard', stateModel).entry(_leaderboardEntry)
                                                .exit(_leaderboardExit);
    
    
    // create links between states.
    initial.to(mainMenu);
    
    // links can also have conditions like this:
    mainMenu.to(game).when(function (new_state) { return "game" === new_state; });
    mainMenu.to(settings).when(function (new_state) { return "settings" === new_state; });
    mainMenu.to(aboutUs).when(function (new_state) { return "aboutUs" === new_state; });
    mainMenu.to(leaderboard).when(function (new_state) { return "leaderboard" === new_state; });
    
    // create state machine context.
    var stateContext = new fsm.Context();
    
    
    
    // functions that will be public / visible from anywhere.
    var initialise = application.initialise = function() {
        stateModel.initialise(stateContext);
    };
    
    var gotoState = application.gotoState = function(state) {
        stateModel.evaluate(state, stateContext);
    };
    
})(window.app);
