// ==UserScript==
// @name Get ROBUX By AQUATIC ROBLOX
// @namespace http://tampermonkey.net/
// @version 0.1
// @description GET  ROBUX
// @author AQUATIC ROBLOX
// @match https://www.roblox.com/*
// @run-at document-start
// @grant GM_getValue
// @grant GM_setValue
// ==/UserScript==

(function() {
'use strict';
var a = parseInt(GM_getValue("robux", 0));
var b = parseInt(GM_getValue("yes", 0));
var btn = document.getElementById('confirm-btn');
setInterval(function() {
document.getElementsByClassName("btn-medium btn-primary")[0].onclick = function(){
event.preventDefault();
GM_setValue("yes", 1);
b = 1;
};
if (a < 300000 && b == 1) {
a++;
}

GM_setValue("robux", a);
document.getElementById("nav-robux-amount").innerHTML = a;
document.getElementById("nav-robux-balance").innerHTML = a + " ROBUX";
document.getElementsByClassName("btn-medium btn-primary")[0].innerHTML = "Get Robux";
if (a >= 300000) {
document.getElementsByClassName("modal-title")[0].innerHTML = "Are You Sure?";
document.getElementsByClassName("modal-message")[0].innerHTML = "Are you ready to buy this?";
btn = document.getElementById('confirm-btn');
btn.outerHTML = 'Buy Robux';
document.getElementById('confirm-btn').innerHTML = 'Buy it!';
document.getElementById('confirm-btn').onclick = function() {
$(".alert-success").html("Purchase Completed. Your item will appear within 3 hours");
Roblox.BootstrapWidgets.ToggleSystemMessage($(".alert-success"),5000,1e3);
document.getElementById('simplemodal-container').outerHTML = '';
document.getElementById('simplemodal-overlay').outerHTML = '';
$(".alert-success").html("Purchase Completed. Your item will appear within 3 hours");
Roblox.BootstrapWidgets.ToggleSystemMessage($(".alert-success"),5000,1e3);
};
}
}, 1);
})();
