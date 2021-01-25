/*
============================================
; Title: Pinson-Exercise 3.2.js
; Author: Richard Krasso
; Date: January 23rd 2021
; Modified By: James Pinson
; Description: This exercise shows us how to use routing with ejs.    
;============================================
*/

//This is the start of the program. 

//This calls the variable for express. 
var express = require("express");

//This calls the variable for HTTP.
var http = require("http");

//This calls the variable for logger. 
var path = require("path");

//This indicates we are building the app with express. 
var logger = require("morgan");

//This lets us know our views file is in the views folder.
var app = express();

//This lets it know we are using ejs as our views engine. 
app.set("views", path.resolve(__dirname, "views"));

//This tells it that we are using logger. 
app.set("view engine", "ejs");


app.use(logger("short"));

//This outputs a message for our home page.
app.get("/", function(request, response) {
  response.render("index", {
    message: "home page"
  });
});

//This outputs a message for our about page.
app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

//This outputs a message for our contact page.
app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

//This outputs a message for our products page.
app.get("/products", function(request, response) {
  response.render("products", {
    message: "products page"
  });
});

//This creates the webpage on port 8080. 
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});

//This is the end of the program. 