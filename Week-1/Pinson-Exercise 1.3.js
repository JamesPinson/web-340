/*
============================================
; Title:  Pinson-Exercise 1.3.js
; Author: Professor Krasso 
; Date:   1/10/2021
; Modified By: James Pinson
; Description: This exercise teaches us how to recreate a module example and output the results. 
;===========================================
*/

//This is the start of the program. 

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This is the required url.
var url = require('url');

//We use the parse function to segregate out pieces of the url. 
var parsedURL = url.parse('https://www.example.com/profile?name=pinson');

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Exercise 1.3") + "\n");

//This calls the parsed url variable to capture the protocol, host, and query of the url. 
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

//This is the end of the program. 