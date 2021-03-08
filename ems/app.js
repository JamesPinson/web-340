var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

var Employee = require("./models/employee");
var csrfProtection = csrf({cookie: true});

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
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next){
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});

app.get("/", function (request, response){

    response.render("index", {
        title:"This is my Home Page.",
        message: "XSS Prevention Example"

    });
});


app.get("/new", function(request, response){
    response.render("new", {
        message: "New Employee Entry Page"
    });
});

app.get("/list", function(request, response){
    Employee.find({}, function(error, employees){
        if (error) throw error;
        response.render("list",{
            title:"Employee List",
            employees: employees
        });
    });
});



app.post("/process", function(request,response){
    console.log(request.body.txtName);
    if (!request.body.txtName){
        response.status(400).send("Entries must have a name");
        return;
    }
    var employeeName = request.body.txtName;
    console.log(employeeName);
    var employee = new Employee({
        firstName: "James",
        lastName: "Pinson"
    });
   
    employee.save(function (error) {

        if (error) throw error;
 
        console.log(employeeName + " saved successfully!");
 
    });
    response.redirect("/");
});

app.get("/view/:queryName", function (request, response) {

    var queryName = request.params.queryName;

    Employee.find({'name': queryName}, function(error, employees) {

        if (error) throw error;

        console.log(employees);

        if (employees.length > 0) {

            response.render("view", {

                title: "Employee Record",

                employee: employees

            })

        }

        else {

            response.redirect("/list")

        }

    });

});




//model



http.createServer(app).listen(8080,function (){
    console.log("Application started on port 8080!");
});
