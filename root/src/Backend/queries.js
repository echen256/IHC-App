var mysql = require("mysql");
var sequelize = require("sequelize");
const Slide = require("./schemas/slide.js");

function create (data){
   Slide.create(data);
}