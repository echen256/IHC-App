import React, { Component } from "react";


import "./../../../App.css";
import TableCell  from "./../../Components/TableCell/TableCell";
import {SubmitReagent} from "../../Components/SubmitReagent/SubmitReagent"
import {Reagent} from "./../../Components/Reagent/Reagent"
import TextField from "./../../Components/TextField/TextField"
import {SlideInfo} from './../../Components/SlideInfo/SlideInfo'
import Axios from "axios";



export class Main extends Component {

  constructor(props){
    super(props);
    this.updateSlideInfo = this.updateSlideInfo.bind(this);
    this.updateReagents = this.updateReagents.bind(this);
    this.submitExperiment = this.submitExperiment.bind(this);
  }



  experiment = {
    reagents : [''],
    slide : ''
  }

  submitExperiment(){

      var data = [...this.experiment.reagents];
      
      var promises = [];
      var complete = true;

      data.push(this.experiment.slide);

      for (var i = 0; i < data.length;i++){

        if (data[i] !== ''){
          if (i === data.length -1){
            promises.push(Axios.post("/submit/slide", data[i] ));
          } else {
            promises.push(Axios.post("/submit/reagent", data[i] ));
          }
          
        } else {
           complete = false;
        }
        
      }
      if (complete){
        Promise.all(promises).then(function(res){
          console.log(res);
          var testedReagent = res[res.length -1];
          console.log(testedReagent)
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

            <SlideInfo dataSlot = {0} export = {this.updateSlideInfo} getRoute = '/get/slide' saveRoute = '/submit/slide'/>
           
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
          <Reagent name = 'Tissue Primer' export = {this.updateReagents} dataSlot = {0} getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
         
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