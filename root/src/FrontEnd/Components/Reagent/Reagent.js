import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import Axios from "axios";
import TableCell from "./../../Components/TableCell/TableCell"

import {CustomForm} from "./../../Components/CustomForm/CustomForm"

export class Reagent extends CustomForm {

    constructObjectFromData(){
        var refs = this.state.refs;
        return { 
            name : refs[0].current.export(),
            catalog : refs[1].current.export(),
            lot : refs[2].current.export(),
            expirationDate : refs[3].current.export()
        }
    }

    numberOfTextFields = 6;

    render() {

        var element = <div className="flexRow">
            <TableCell shouldFlexGrow={true} item={this.props.name} />
             {this.state.textFields}
            <TableCell shouldFlexGrow={false} item={<SubmitReagent onClick = {this.packageData} />} />
        </div>
        

        return (
            element
        );
    }

}