/*
============================================
; Title:  Pinson-Assignment-4.4.js
; Author: Professor Krasso
; Modified by: James Pinson
; Date:   January 30th 2021
; Description: Demonstrates CRUD operations in Node.js API.
;===========================================
*/

//This is the start of the program.

//This requires express.
var express = require("express");

//This requires http.
var http = require("http");

//This shows we are using express to create the application.
var app = express();

//This creates the app get request.
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

//This creates the app put request.
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

//This creates the app post request.
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

//This creates the app delete request.
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

//This creates the serve on port 8080.
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

//This is the end of the application.
