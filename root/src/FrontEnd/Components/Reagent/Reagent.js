import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import Axios from "axios";
import TableCell from "./../../Components/TableCell/TableCell"

export class Reagent extends Component {

    constructor(props) {
        super(props);
        this.updateTextArray = this.updateTextArray.bind(this);
        this.saveReagent = this.saveReagent.bind(this);
        this.getReagent = this.getReagent.bind(this);
       // this.updateInternalReagentInfo = this.updateInternalReagentInfo.bind(this);
    }

    updateTextArray(i, text) {
        var localTextArray = this.state.textArray;
        localTextArray[i] = text;
    }

    state = {
        textArray: ['','','','','',''],
    }

    reagent = {name : '',catalog : '', lot : '', expirationDate : ''}

    updateInternalReagentInfo(){
        var textArray = this.state.textArray;
        var validReagent = true;
        for (var i = 0; i < textArray.length;i++){
            if (textArray[i] === ""){
                validReagent = false;
            } 
        }
        if (validReagent){
            var reagent =  {
                name : textArray[0],
                catalog : textArray[1],
                lot : textArray[2],
                expirationDate : textArray[3]
            }  
            this.reagent = reagent;
            this.props.updateReagents(this.props.reagentSlot,reagent)
        }
        
        return validReagent;
    }

    saveReagent() {
       
        if (this.updateInternalReagentInfo()){
            console.log(this.state.reagent);
            Axios.post("/submit/reagent",this.reagent
           
            ).then(function(res){
                console.log(res);
            })
        } else {
            console.log("invalid reagent, missing info")
        }
       
    }

    getReagent(){
        if (this.updateInternalReagentInfo()){
        console.log("x");
        Axios.post("/get/reagent",this.reagent).then(function(res){
            console.log(res);
        });
    } else {
        console.log("invalid reagent, missing info")
    }
    }

    render() {
        return (
            <div className="flexRow">
                <TableCell shouldFlexGrow={true} item={this.props.name} />
                <TableCell shouldFlexGrow={true} item={<TextField i={0} updateTextArray={this.updateTextArray} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={1} updateTextArray={this.updateTextArray} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={2} updateTextArray={this.updateTextArray} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={3} updateTextArray={this.updateTextArray} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={4} updateTextArray={this.updateTextArray} />}/>
                <TableCell shouldFlexGrow={true} item={<TextField i={5} updateTextArray={this.updateTextArray} />}/>
                <TableCell shouldFlexGrow={false} item={<SubmitReagent onClick = {this.saveReagent}/>} />
            

                <div className = 'flexGrow1 customTableCell' onClick = {this.getReagent}>X</div>
             
            </div>
        );
    }

}