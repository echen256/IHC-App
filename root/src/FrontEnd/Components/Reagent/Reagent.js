import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import { CustomTable, TableCell } from "../../Components/CustomTable/CustomTable";
import Axios from "axios";
import { func } from "prop-types";

export class Reagent extends Component {

    constructor(props) {
        super(props);
        this.updateTextArray = this.updateTextArray.bind(this);
        this.saveReagent = this.saveReagent.bind(this);
    }

    renderCells() {
        var localTextArray = [];
        var cells = [];
        cells.push(<TableCell shouldFlexGrow={true} item={this.props.name} />);
        for (var i = 0; i < this.props.numberOfTextFields; i++) {
            localTextArray.push("");
            cells.push(<TableCell shouldFlexGrow={true} item={<TextField i={i} updateTextArray={this.updateTextArray} />} />);
        }
        cells.push(<TableCell shouldFlexGrow={false} item={<SubmitReagent onClick = {this.saveReagent}/>} />);
        this.setState({ cells: cells });
        this.setState({ textArray: localTextArray })
        return cells;
    }

    updateTextArray(i, text) {
        var localTextArray = this.state.textArray;
        localTextArray[i] = text;

    }

    state = {
        cells: [],
        textArray: []
    }

    componentDidMount() {
        this.renderCells();
    }

    saveReagent() {
        var textArray = this.state.textArray;
        var validReagent = true;
        for (var i = 0; i < 4;i++){
            if (textArray[i] === ""){
                validReagent = false;
            } 
        }
        console.log("submitting");
        if (validReagent){
            Axios.post("/submit/reagent",
            {
                name : textArray[0],
                catalog : textArray[1],
                lot : textArray[2],
                expirationDate : textArray[3]
            }  
        ).then(function(res){
            console.log(res);
        })
        } else {
            console.log("invalid reagent, missing info")
        }
       
    }

    render() {
        return (
            
                <div className="flexRow">
                    {this.state.cells}
                </div>

       


        );
    }

}