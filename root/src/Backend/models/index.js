const Reagent = require("./reagent.js");
const Slide = require("./slide.js");
const Sequelize = require("sequelize");
var Experiment = require("./experiment.js");
var fs = require("fs");



const sequelize = new Sequelize('ihc_db','dummy','q',{
    host : "localhost",
    dialect : 'mysql'
})

sequelize.authenticate().then(() =>{
    console.log("data base connnection established")
}).catch(err => {
    console.log("failed to connect to database")
})

var db = {};

db.Reagent = Reagent(sequelize,Sequelize.DataTypes);
db.Slide = Slide(sequelize,Sequelize.DataTypes);
db.Experiment = Experiment(sequelize, Sequelize.DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;