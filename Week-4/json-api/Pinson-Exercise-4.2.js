/*
============================================
; Title: Pinson-Exercise-4.2.js
; Author: James Pinson
; Date:   January 30th 2021
; Description: This shows us how to create a JSON API. 
;===========================================
*/

//This is the start of the program. 

//Shows that we are requiring express. 
var express = require("express");

//This shows we are requiring http.
var http = require("http");

//This shows we are using express to create the application. 
var app = express();

//This shows we are creating the app at /customer/:id
//We assign the json response below with desired fields. 
app.get("/customer/:id", function (request, response){

    var id = parseInt(request.params.id, 10);

    response.json({
        firstName: "James",
        lastName: "Pinson",
        employeeId: 801
    });
});

//This shows we are creating the server on port 8080. 
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080");
});

//This is the end of the program.