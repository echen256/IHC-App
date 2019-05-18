var express = require("express");
var app = express();
app.get("/routing",function(req,res){
    res.send({working: "TRUE"})
});

var port = 3001;
var server = app.listen(port,function(){
    console.log("app started on port " + port);
});