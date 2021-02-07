/*
============================================
; Title: Pinson-Exercise-5.2-.js
; Author: James Pinson
; Date:   February 6th 2021
; Description: This shows us how to do if else statements with ejs. 
;===========================================
*/

//This is the start of the program. 

//This is our requirements. 
var express = require('express');
var http = require('http');
var path = require('path');

//This shows we are creating the app with express. 
var app = express();

//This shows we are using ejs as our view engine. 
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//This creates our array of composers. 
var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi"
];

//This is our get function that renders the names of our composers. 
app.get("/", function(req, res){
    res.render('index', {
        names: composers
    });
});

//This creates our server on port 3000. 
http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port 3000.')
});

//This is the end of our program. 