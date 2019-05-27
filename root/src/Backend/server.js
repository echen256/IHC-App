const queries = require("./queries.js");
var express = require("express");
var mysql = require("mysql2");

var db = require("./models");
var routes = require("./routing")

var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));



require("./routing")(app);


var port = 3001;

db.sequelize.sync().then(function(){
    console.log("sync completed");
    app.listen(port,function(){
        console.log("app started on port " + port);
    });
});
