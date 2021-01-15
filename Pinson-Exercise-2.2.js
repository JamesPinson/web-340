/*
============================================
; Title: Pinson-Exercise 2.2.js
; Author: Richard Krasso
; Date: January 14th 2021
; Modified By: James Pinson
; Description: This exercise shows us how the basic steps of creating a node application. 
;============================================
*/

//This is the start of the program. 

//This is the assignment header.
const header = require('./Pinson-Header.js');

//This shows we are requiring express. 
var express = require('express');

//This shows we are requiring http. 
var http = require('http');

//This shows the app is created with express. 
var app = express();

//This sets up when the server is used it sends a request and the response is Hello World. 
app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World \n');
})

//This creates the server on port 8080.
http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Exercise 2.2") + "\n");

//This is the end of the program. 