import React,{ Component} from "react";
import "./../../../App.css";
import TextField  from "./../../Components/TextField/TextField";
import {SubmitReagent} from "../../Components/SubmitReagent/SubmitReagent"
import { CustomTable , TableCell} from "../../Components/CustomTable/CustomTable";

export class Reagent extends Component{


    render(){
        return(<tr className = "flexRow">
           
                <TableCell shouldFlexGrow = {true} item = { this.props.name}/> 
                  <TableCell shouldFlexGrow = {true} item = {  <TextField/>}/> 
                    <TableCell shouldFlexGrow = {true} item = { <TextField/>}/> 
                      <TableCell shouldFlexGrow = {true} item = { <TextField/>}/> 
                        <TableCell shouldFlexGrow = {true} item = {<TextField/>}/> 
                          <TableCell shouldFlexGrow = {true} item = { <TextField/>}/>
                              <TableCell shouldFlexGrow = {true} item = { <TextField/>}/> 
                              <TableCell shouldFlexGrow = {false} item = { <SubmitReagent/>}/> 
            </tr>

        );
    }

}