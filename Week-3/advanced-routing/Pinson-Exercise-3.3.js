/*
============================================
; Title: Pinson-Exercise 3.2.js
; Author: Richard Krasso
; Date: January 23rd 2021
; Modified By: James Pinson
; Description: This exercise shows us how to use routing by a list of values.    
;============================================
*/
//This is the start of the program. 

//This calls the variable for express. 
var express = require('express');

//This calls the variable for HTTP.
var http = require('http');

//This calls the variable for path. 
var path = require('path');

//This calls the variable for logger. 
var logger = require('morgan');

//This indicates we are building the app with express. 
var app = express();

//This lets us know our views file is in the views folder.
app.set('views', path.resolve(__dirname, 'views'));

//This lets it know we are using ejs as our views engine. 
app.set('view engine', 'ejs');

//This tells it that we are using logger. 
app.use(logger('dev'));

//This tells the app to get our product id. 
app.get('/:productId', function(req, res){
    var productId = parseInt(req.params.productId, 10);

    res.render('index', {
        productId: productId
    });
});

//This creates the server for our app on port 3001. 
http.createServer(app).listen(3001, function(){
    console.log('Application started and listening on port %s', 3001)
});

