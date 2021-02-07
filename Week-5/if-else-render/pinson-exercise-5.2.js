var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi"
];

app.get("/", function(req, res){
    res.render('index', {
        names: composers
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port 3000.')
});