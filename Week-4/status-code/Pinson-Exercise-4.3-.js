/*
============================================
; Title: Pinson-Exercise-4.3-.js
; Author: James Pinson
; Date:   January 30th 2021
; Description: This shows us how to use HTTP Status Codes. 
;===========================================
*/

//This is the start of the program. 

//This shows we are requiring express. 
var express = require("express");

//This shows that we are requiring http. 
var http = require("http");

//This shows we are creating the application with express. 
var app = express();

//This creates the app route /not-found and we give it the desired json response.
app.get("/not-found", function(request, response){

    response.status(404);

    response.json({
        error: "Resource not found."
    })
});

//This creates the app route /ok and we give it the desired json response. 
app.get("/ok", function(request, response){
    
    response.status(200);

    response.json({
        message: "Page correctly loaded."
    })
});

//This creates the app route /not-implemented and we give it the desired json response. 
app.get("/not-implemented", function(request,response){

    response.status(501);

    response.json({
        error: "Page was not implemented."
    })
});

//This creates the server on port 8080. 
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

//This is the end of the program. 