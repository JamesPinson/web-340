/*
============================================
; Title: Pinson-Exercise 6.3.js
; Author: Richard Krasso
; Date: february 14th 2021
; Modified By: James Pinson
; Description: This assignment teaches us use mongoose and MongoDB.   
;============================================
*/

var express =require('express');
var http = require('http');
var logger = require('morgan');
var mongoose= require('mongoose');
const { resolveSoa } = require('dns');

//This connects to mongoose using MongoDB and connects to our database.
var mongoDB = 'mongodb+srv://JamesPinson:Jimmyp369@buwebdev-cluster-1.iavdd.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

//This returns a message showing if there was an error or if connection was a success.
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to mLab');
});

//This shows we are using express to create the app. 
var app = express();
app.use(logger('dev'));

//This creates the server on port 5000 and gives a result message to show it was successful. 
http.createServer(app).listen(5000, function (){
    console.log('Application started and listening on port 5000');
});