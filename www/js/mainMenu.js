/*
 * Please see the included README.md file for license terms and conditions.
 */

// write code DOWN from here.

var login = function () {

                if (window.cordova.platformId == "browser") {

                    var appId = "Your app Id"

                    facebookConnectPlugin.browserInit(appId);

                    alert(JSON.stringify(facebookConnectPlugin))

                }

                facebookConnectPlugin.login( ["email"],

                    function (response) { alert(JSON.stringify(response)) },

                    function (response) { alert(JSON.stringify(response)) });

            }
