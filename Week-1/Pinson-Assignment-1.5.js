/*
============================================
; Title:  Pinson-Assignment 1.5.js
; Author: Professor Krasso 
; Date:   1/10/2021
; Modified By: James Pinson
; Description: This exercise teaches us how to create a web server in Node.
;===========================================
*/


//This is the start of the program. 

//This is the assignment header. 
const header = require('./Pinson-Header.js');

var http = require("http");

//This is the function to process the request that shows or body message.
function processRequest(req, res) {

var body ="Welcome to Assignment 1.5";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'
    });


    res.end(body);

}

//This creates the server.
var s = http.createServer(processRequest);

//This gives the server a local port of 8080. 
s.listen(8080);

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Assignment 1.5") + "\n");

//This is the end of the program. 