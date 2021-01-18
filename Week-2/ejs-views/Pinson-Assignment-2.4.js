/*
============================================
; Title: Pinson-Exercise 2.2.js
; Author: Richard Krasso
; Date: January 17th 2021
; Modified By: James Pinson
; Description: This exercise shows us how to use the view engine ejs. 
;============================================
*/

//This is the start of the program. 

//This shows we are requiring http. 
var http = require("http");

//This shows we are requiring express. 
var express = require("express");

//This shows we are requiring path. 
var path = require("path");

//This shows the app is created with express.
var app = express();

//This tells express that views are in the views directory.
app.set("views",path.resolve(__dirname,"views"));

//This tells express we are using the ejs view engine. 
app.set("view engine","ejs");

//This defines the values we are passing through the ejs page. 
app.get("/",function(request,response){
    response.render("index",{
        firstName:"Jimmy",
        lastName:"Pinson",
        address:"123 Elm St. "
    });
});

//This creates the server on port 8080. 
http.createServer(app).listen(8080,function(){
    console.log("EJS-Views app started on port 8080.");
});

//This is the end of the program. 

