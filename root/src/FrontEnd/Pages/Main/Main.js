import React, { Component } from "react";


import "./../../../App.css";
import TableCell  from "./../../Components/TableCell/TableCell";
import {SubmitReagent} from "../../Components/SubmitReagent/SubmitReagent"
import {Reagent} from "./../../Components/Reagent/Reagent"
import TextField from "./../../Components/TextField/TextField"
import {SlideInfo} from './../../Components/SlideInfo/SlideInfo'



export class Main extends Component {

  constructor(props){
    super(props);
    this.updateReagents = this.updateReagents.bind(this);
  }


  
  experiment = {
    reagents : ['','','','','',''],
    slide : ''
  }

  submitExperiment(){

  }
 
  updateSlideInfo(slide){
    console.log(slide);
   // this.experiment.slide = slide;
  }

  updateReagents(index, reagent){
    this.experiment.reagents[index] = reagent;
    console.log(this.reagents);
  }

  render() {
    return (
      <div className = "App">

        
        <div className = "vert-margin-5">
        <div className = "vert-margin-5 customTable" >
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
          <Reagent name = 'Tissue Primer' updateReagents = {this.updateReagents} reagentSlot = {0} />
          <Reagent name = 'Background Blocker'  updateReagents = {this.updateReagents} reagentSlot = {1} />
          <Reagent name = 'Antibody'   updateReagents = {this.updateReagents} reagentSlot = {2} />
          <Reagent name = 'Linker'   updateReagents = {this.updateReagents} reagentSlot = {3}/>
          <Reagent name = 'Tracer'   updateReagents = {this.updateReagents} reagentSlot = {4} />
          <Reagent name = 'Chromogen'   updateReagents = {this.updateReagents} reagentSlot = {5}/>
          <Reagent name = 'Counterstain'   updateReagents = {this.updateReagents} reagentSlot = {6}/>

        </table>

      </div>
    );
  }
}
