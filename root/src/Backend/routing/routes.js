
const db = require('./../models');

module.exports = function (app) {

    app.post("/submit/slide", function (req, res) {
        console.log(req.body);
        db.Slide.create(req.body).then(res => { console.log("Slide created " + res) }).catch(error => {console.log(error)});
        res.json({ message: "post complete" });
    });

    app.post("/submit/reagent", function (req, res) {
   
        db.Reagent.create(req.body).then(res => { console.log("Reagent created " + res) }).catch(error => {console.log(error)});
        res.json({ message: "post complete" });
    });

    app.get("/routing",function(req,res){
        res.send({working: "TRUE"})
    });

    app.post("/submit/experiment", function(req,res){
        db.Experiment.create(req.body).then(res => { console.log("Experiment created " + res) }).catch(error => {console.log(error)});
        res.json({ message: "post complete" });
    });

    app.post("/check/reagent", function(req,res){
        var id = req.body.id;
        db.Reagent.findAll({where : {
            id : id
        }}).then(function(reagent){
            res.json({ message: "post complete" });
            return reagent;
        }).catch(function(error){
            res.json({ message: error });
        })

    });







}