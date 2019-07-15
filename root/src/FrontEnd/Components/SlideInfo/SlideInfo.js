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


        this.data = {
            tissueId: refs.current[0].export(),
            tissueType: refs.current[1].export(),
            dilutionFactor: refs.current[2].export(),
            name: refs.current[3].export(),
            catalog: refs.current[4].export(),
            lot: refs.current[5].export(),
            expirationDate: refs.current[6].export()

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