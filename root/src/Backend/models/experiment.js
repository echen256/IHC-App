const Reagent = require("./reagent.js");
const Slide = require("./slide.js");
const Sequelize = require("sequelize");


module.exports = function(sequelize, DataTypes){

    const Experiment = sequelize.define('experiment', {
        slide : {
            type : DataTypes.String,
            references : Slide,
            referencesKey : 'id'
        },
        pretreatment : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        } ,
        tissuePrimer : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        }, 
        backgroundBlocker : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        },
        antibody : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        },
        linker : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        },
        tracer : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        },
        chromogen : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        },
        counterStain : {
            type : DataTypes.String,
            references : Reagent, 
            referencesKey : 'id'
        }


    });
    Experiment.hasMany(Slide);
    Experiment.hasMany(Reagent);
    return Experiment;
}