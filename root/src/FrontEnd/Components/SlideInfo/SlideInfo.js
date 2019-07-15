import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import Axios from "axios";
import TableCell from "./../../Components/TableCell/TableCell";
import { CustomForm } from "./../../Components/CustomForm/CustomForm"

export class SlideInfo extends CustomForm {

    


    constructObjectFromData() {
        var refs = this.state.refs;


        return {
            tissueId: refs[0].current.export(),
            tissueType: refs[1].current.export(),
            dilutionFactor: refs[2].current.export(),
            name: refs[3].current.export(),
            catalog: refs[4].current.export(),
            lot: refs[5].current.export(),
            expirationDate: refs[6].current.export()

        }
    }
    
    numberOfTextFields = 8;

    render() {
        return (
            <div className="flexRow">
                {this.state.textFields}
                <TableCell shouldFlexGrow={false} item={<SubmitReagent  />} />
            </div>
        );
    }

}