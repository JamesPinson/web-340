/*
============================================
; Title: Pinson-Exercise-5.3-.js
; Author: James Pinson
; Date:   February 6th 2021
; Description: This shows us how to use Pug. 
;===========================================
*/

//This is the start of the program. 

//This is were we set out requirements. 
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

//This shows we are building the app with express. 
var app = express();

//This shows that we are using pug as our views engine and it will be found in the views folder. 
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//This creates the get function for the app which renders a message. 
app.get('/', function(req, res){
    res.render('index', {
        message: 'To Be The Man, You Have to Beat The Man WOOOOO! - Ric Flair'
    });
});

//This creates the server on port 8000. 
http.createServer(app).listen(8000, function (){
    console.log('Application started and listening on port 8000');
});

//This is the end of the program. 