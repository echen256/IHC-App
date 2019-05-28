const Reagent = require("./reagent.js");
const Slide = require("./slide.js");
const Sequelize = require("sequelize");


module.exports = function(sequelize, DataTypes){

    const Experiment = sequelize.define('experiment', {
        slide : {
            type : DataTypes.INTEGER,
            references : {
                model : "slides",
                key : 'id'
            } ,
            allowNull : false
           
        },
        pretreatment : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        } ,
        tissuePrimer : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        }, 
        backgroundBlocker : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        },
        antibody : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        },
        linker : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        },
        tracer : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        },
        chromogen : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        },
        counterStain : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        }


    });
    return Experiment;
}