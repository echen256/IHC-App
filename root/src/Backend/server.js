var express = require("express");
var mysql = require("mysql2");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('ihc_db','root','q',{
    host : "localhost",
    dialect : 'mysql'
})

sequelize.authenticate().then(() =>{
    console.log("data base connnection established")
}).catch(err => {
    console.log("failed to connect to database")
})

const Slide = sequelize.define('slide', {
    tissueId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    antibodyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    antibodyLot: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

)

Slide.create({
    tissueId: "AC-3", antibodyName : "Pan-TLK", antibodyLot : "DD086"
}).then(res => {console.log("Slide created " + res)})



var app = express();
app.get("/routing",function(req,res){
    res.send({working: "TRUE"})
});

var port = 3001;
var server = app.listen(port,function(){
    console.log("app started on port " + port);
});