/*
============================================
; Title: Pinson-Exercise 2.3.js
; Author: Richard Krasso
; Date: January 14th 2021
; Modified By: James Pinson
; Description: This exercise shows us how to use the general format to map request using routing.  
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
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');
});

//This sets up when the server is on /about it sends a request and the response is Welcome to the about page.
app.get('/about', function(re1, res){
    res.end('Welcome to the about page.\n');
});

//This sets up when the server is on /contact it sends a request and the response is Welcome to the contact page.
app.get('/contact', function(req, res){
    res.end('Welcome to the contact page.\n');
});

//This sets up when the server directed to anything else it sends a request and the response is 404 error code.
app.use(function(req, res){
    res.statusCode = 404;
    res.end( '404!\n');
});

//This creates the server on port 3000.
http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
});

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Exercise 2.3") + "\n");

//This is the end of the program. 