import React, { Component } from "react";


import "./../../../App.css";
import TextField  from "./../../Components/TextField/TextField";
import {SubmitReagent} from "../../Components/SubmitReagent/SubmitReagent"
import { CustomTable , TableCell} from "../../Components/CustomTable/CustomTable";
import axios from 'axios';

import {Reagent} from "./../../Components/Reagent/Reagent"




export class Main extends Component {
  state = {
    items: [
      "Pretreatment",
      "Tissue Primer",
      "Background Blocker",
      "Antibody",
      "Linker",
      "Tracer",
      "Chromogen",
      "Counter Stain"
    ]
  };


 

  render() {
    return (
      <div className = "App">

        
        <div className = "vert-margin-5">
        <table className = "vert-margin-5 customTable" >
            <tr>
              <div className = "tableTitle">
                Experiment Conditions
              </div>
            </tr>
            <tr className = 'flexRow'>
              <TableCell shouldFlexGrow = {true} item = { "Tissue Type"}/>
              <TableCell shouldFlexGrow = {true} item = { "Dilution Factor"}/> 
              <TableCell shouldFlexGrow = {true} item = {"Tested Reagent Type"}/> 
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Name"}/> 
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Lot"}/> 
              <TableCell shouldFlexGrow = {true} item = {"Tested Reagent Exp Date"}/> 
              <TableCell shouldFlexGrow = {true} item = {"Tested Reagent Catalog Number"}/> 
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Notes"}/> 
              <TableCell shouldFlexGrow = {false} item = { "Save"}/> 
            </tr>

            <tr className = 'flexRow'>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/>
              <TableCell shouldFlexGrow = {false} item = { <SubmitReagent/>}/> 
            </tr>
        </table>

  
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
          <Reagent name = 'Tissue Primer' numberOfTextFields = {6}/>
          <Reagent name = 'Background Blocker' numberOfTextFields = {6}/>
          <Reagent name = 'Antibody'  numberOfTextFields = {6}/>
          <Reagent name = 'Linker'  numberOfTextFields = {6}/>
          <Reagent name = 'Tracer'  numberOfTextFields = {6}/>
          <Reagent name = 'Chromogen'  numberOfTextFields = {6}/>
          <Reagent name = 'Counterstain'  numberOfTextFields = {6}/>

        </table>

      </div>
    );
  }
}
