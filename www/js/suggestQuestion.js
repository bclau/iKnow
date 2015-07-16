/*
 * Please see the included README.md file for license terms and conditions.
 */

// write code DOWN from here.

//define question, define choose domain, define answer, define w1, w2, w3, define thank you answer

function validateForm()     {
var answer=document.getElementById("answer");  
var wrong1=document.getElementById("wrong1");
var wrong2=document.getElementById("wrong2");
var wrong3=document.getElementById("wrong3");
    if(document.getElementById("movies").checked) {
        var domain = document.getElementById("movies").value;
    }
    if(document.getElementById("music").checked) {
        var domain = document.getElementById("music").value;
    }
    if(document.getElementById("art").checked) {
        var domain = document.getElementById("art").value;
    }
    if(document.getElementById("geography").checked) {
        var domain = document.getElementById("geography").value;
    }
    if(document.getElementById("sports").checked) {
        var domain = document.getElementById("sports").value;
    }
    if(document.getElementById("history").checked) {
        var domain = document.getElementById("history").value;
    }
    if(document.getElementById("culture").checked) {
        var domain = document.getElementById("culture").value;
    }
    if(document.getElementById("intelligence").checked) {
        var domain = document.getElementById("intelligence").value;
    }
    
    if(document.getElementById("science").checked) {
        var domain = document.getElementById("science").value;
    }
    
    if(document.getElementById("sports").checked) {
        var domain = document.getElementById("sports").value;
    }
      
    if(document.getElementById("literature").checked) {
        var domain = document.getElementById("literature").value;
    }
    
    alert("Domain" +domain);
}