import React, { Component } from "react";


import "./../../../App.css";
import TableCell  from "./../../Components/TableCell/TableCell";
import {SubmitReagent} from "../../Components/SubmitReagent/SubmitReagent"
import {Reagent} from "./../../Components/Reagent/Reagent"
import TextField from "./../../Components/TextField/TextField"
import {SlideInfo} from './../../Components/SlideInfo/SlideInfo'
import Axios from "axios";

class ReagentData {

  data = {
    
  }

  constructor(type,name,catalog,lot, expDate,notes){
      this.data.type = type;
      this.data.name = name;
      this.data.catalog = catalog;
      this.data.lot = lot;
      this.data.expDate = expDate;
      this.data.notes = notes;
  }
}

export class AddSlide extends Component {

  constructor(props){
    super(props);
    this.updateSlideInfo = this.updateSlideInfo.bind(this);
    this.updateReagents = this.updateReagents.bind(this);
    this.submitExperiment = this.submitExperiment.bind(this);
  }



  experiment = {
    reagents : ['','','','','','','',''],
    slide : ''
  }

  state = {
    /*slide : {},
    reagents : [
      new ReagentData('Pretreatment','','','','',''),
      new ReagentData('Background Blocker','','','','',''),
      new ReagentData('Primary Antibody','','','','',''),
      new ReagentData('Linker','','','','',''),
      new ReagentData('Tracer','','','','',''),
      new ReagentData('Chromogen','','','','',''),
      new ReagentData('Counter Stain','','','','',''),
      new ReagentData('Pretreatment','','','','',''),
      new ReagentData('Pretreatment','','','','','')
    ]*/
  }

  submitExperiment(){

      var data = [...this.experiment.reagents];
      
      var promises = [];
      var complete = true;

 
      for (var i = 0; i < data.length;i++){

        if (data[i] !== ''){
          promises.push(Axios.post("/submit/reagent", data[i] ));   
        } else {
           console.log(i);
           complete = false;
        }
        
      }
      promises.push(Axios.post("/submit/slide",this.experiment.slide  ));

      if (complete){
        Promise.all(promises).then(function(res){
          console.log(res);
          var slide = res[res.length -1];
          var experiment = {
            slide : slide.data.id,
            pretreatment : res[0].data[0].id,
            tissuePrimer : res[1].data[0].id,
            backgroundBlocker : res[2].data[0].id,
            antibody : res[3].data[0].id,
            linker : res[4].data[0].id,
            tracer : res[5].data[0].id,
            chromogen : res[6].data[0].id,
            counterStain : res[7].data[0].id
          }
          Axios.post('/submit/experiment', experiment).then(function(res){
            console.log(res);
          });
        });
      } else {
        console.log('incomplete form');
      }
      
  }
 
  updateSlideInfo(dataSlot,slide){
    this.experiment.slide = slide;
  }

  updateReagents(dataSlot, reagent){
    this.experiment.reagents[dataSlot] = reagent;
  }

  

  loadExperiment(experiment){
     
  }
  

  render() {
    return (
      <div className = "App">

        
        <div className = "vert-margin-5">
        <div className = "vert-margin-5 customTable" >

            <div onClick = {this.submitExperiment}>  X </div>
            <div>
              <div className = "tableTitle">
                Experiment Conditions
              </div>
            </div>

            <div className = 'flexRow'>
              <TableCell shouldFlexGrow = {true} item = { "Tissue ID"}/>
              <TableCell shouldFlexGrow = {true} item = { "Tissue Type"}/>
              <TableCell shouldFlexGrow = {true} item = { "Dilution Factor"}/> 
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Name"}/> 
              <TableCell shouldFlexGrow = {true} item = {"Tested Reagent Catalog Number"}/> 
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Lot"}/> 
              <TableCell shouldFlexGrow = {true} item = {"Tested Reagent Exp Date"}/>    
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Notes"}/> 
              <TableCell shouldFlexGrow = {false} item = { "Save"}/> 
            </div>

            <SlideInfo ref = 'slide' dataSlot = {0} export = {this.updateSlideInfo} getRoute = '/get/slide' saveRoute = '/submit/slide'/>
           
        </div>

  
        </div>



        <table className = "vert-margin-5 customTable" ><tr>
              <div className = "tableTitle">
                Reagents Used
              </div>
            </tr>
            <tr className = 'flexRow'>
                <TableCell shouldFlexGrow = {true} item = { "Reagent Type"}/> 
                <TableCell shouldFlexGrow = {true} item = {  "Reagent Name"}/>
                <TableCell shouldFlexGrow = {true} item = {  "Reagent Catalog Number"}/> 
                <TableCell shouldFlexGrow = {true} item = { "Reagent Lot"}/> 
                <TableCell shouldFlexGrow = {true} item = { "Reagent Exp Date"}/> 
                <TableCell shouldFlexGrow = {true} item = { "Reagent Incubation Time"}/>
                <TableCell shouldFlexGrow = {true} item = { "Reagent Notes"}/> 
                <TableCell shouldFlexGrow = {false} item = { "Save"}/> 
            </tr>
          <Reagent ref = 'PreTreatment' name = 'PreTreatment' export = {this.updateReagents} dataSlot = {0} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = 'Tissue Primer' name = 'Tissue Primer' export = {this.updateReagents} dataSlot = {1} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref =' Background Blocker' name = 'Background Blocker'  export = {this.updateReagents} dataSlot = {2} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = 'Antiobody' name = 'Antibody'   export = {this.updateReagents} dataSlot = {3} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = 'Linker' name = 'Linker'  export = {this.updateReagents} dataSlot = {4} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = 'Tracer' name = 'Tracer'   export = {this.updateReagents} dataSlot = {5} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = 'Chromogen' name = 'Chromogen'   export = {this.updateReagents} dataSlot = {6} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = 'Counterstain' name = 'Counterstain'   export = {this.updateReagents} dataSlot = {7} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
        </table>

      </div>
    );
  }
}
/* <Reagent name = 'Background Blocker'  export = {this.updateReagents} dataSlot = {1} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent name = 'Antibody'   export = {this.updateReagents} dataSlot = {2} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent name = 'Linker'  export = {this.updateReagents} dataSlot = {3} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent name = 'Tracer'   export = {this.updateReagents} dataSlot = {4} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent name = 'Chromogen'   export = {this.updateReagents} dataSlot = {5} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent name = 'Counterstain'   export = {this.updateReagents} dataSlot = {6} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
*/