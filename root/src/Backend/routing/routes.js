
const db = require('./../models');

module.exports = function (app) {

    app.post("/submit/slide", function (req, outbound) {
        db.Slide.findAll({where : req.body}).then(function(res){
            if (res.length > 0){
                outbound.json(res[0]);
            } else {
                db.Slide.create(req.body).then(response => {outbound.json(response)}).catch(error => {console.log(error)});
            }
        })
    });

    app.post("/get/reagent", function(req,res){
        var reagent = req.body;
        db.Reagent.findAll({where : { 
           
            catalog :reagent.catalog,
            lot : reagent.lot
           
        }}).then(response=> {
            res.json(response);
        }).catch(error => {console.log(error)});
    })

    app.post("/submit/reagent", function (req, outbound) {
        var reagent = req.body;

        db.Reagent.findAll({where : {           
            catalog :reagent.catalog,
            lot : reagent.lot
        }}).then(sqlResponse => {
           if (sqlResponse.length === 0){
                db.Reagent.create(req.body).then(res => { 
                outbound.send(res);
                }).catch(error => {console.log(error)});
           } else {
                outbound.send(sqlResponse[0]);
           }
           
        }).catch(error => {console.log(error)});
        
    });

    app.get("/routing",function(req,res){
        res.send({working: "TRUE"})
    });

    app.post("/submit/experiment", function(req,res){
        db.Experiment.create(req.body).then(res => { console.log("Experiment created " + res) }).catch(error => {console.log(error)});
        res.json({ message: "post complete" });
    });


    app.get("/get/slide/:id", function(req,res){
  
        db.Slide.findAll({where : {
            id : req.params.id
        }}).then(function(slide){
            res.send(slide);
        })
    })

    app.post('/get/experiment', function(req,res){
      

        db.Experiment.findAll({
            order : [['createdAt' , 'DESC']]
        }).then(function(items){
            

            var index = req.body.index;
            var length = items.length;
            var numberOfResults = req.body.numberOfResults;
            var output = [];
 
            if (index < length){

                if (length < index + numberOfResults){
                    output = items.splice(index,length - index);
                    console.log("A");
                } else {
                    output = items.splice(index,numberOfResults);
                    console.log("B");
                }
    
            
            } else {
                console.log("C")
            }
           
            res.json({results : output, length : length});
        })
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