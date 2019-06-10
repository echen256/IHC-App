import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import Axios from "axios";
import TableCell from "./../../Components/TableCell/TableCell"

import {CustomForm} from "./../../Components/CustomForm/CustomForm"

export class Reagent extends CustomForm {

    constructObjectFromData(){
        var textArray = this.state.textArray;
        
        this.data = { 
            name : textArray[0],
            catalog : textArray[1],
            lot : textArray[2],
            expirationDate : textArray[3]
        }
        
       
    }

    render() {
        return (
            <div className="flexRow">
                <TableCell shouldFlexGrow={true} item={this.props.name} />
                <TableCell shouldFlexGrow={true} item={<TextField i={0} updateTextArray={this.record} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={1} updateTextArray={this.record} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={2} updateTextArray={this.record} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={3} updateTextArray={this.record} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={4} updateTextArray={this.record} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={5} updateTextArray={this.record} />}/>
                <TableCell shouldFlexGrow={false} item={<SubmitReagent onClick = {this.save}/>} />
                <div className = 'flexGrow1 customTableCell' onClick = {this.get}>X</div>
             
            </div>
        );
    }

}