var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");

var Employee = require("./models/employee");

var mongoDB = "mongodb+srv://JamesPinson:Jimmyp369@buwebdev-cluster-1.iavdd.mongodb.net/test";

mongoose.connect(mongoDB, {
    useMongoClient:true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function (){
    console.log("Application connected to mLab MongoDB instance");
});

var app = express();

app.set("views", path.resolve(__dirname,"views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response){

    response.render("index", {
        title:"This is my Home Page."

    });
});

//model

var employee = new Employee({
    firstName: "James",
    lastName: "Pinson"
})

http.createServer(app).listen(8080,function (){
    console.log("Application started on port 8080!");
});
