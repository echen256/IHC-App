import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import Axios from "axios";
import TableCell from "./../../Components/TableCell/TableCell";
import { CustomForm } from "./../../Components/CustomForm/CustomForm"

export class SlideInfo extends CustomForm {




    constructObjectFromData() {
        var textArray = this.state.textArray;


        this.data = {
            tissueId: textArray[0],
            tissueType: textArray[1],
            dilutionFactor: textArray[2],
            name: textArray[3],
            catalog: textArray[4],
            lot: textArray[5],
            expirationDate: textArray[6]

        }



    }

    render() {
        return (
            <div className="flexRow">
                <TableCell shouldFlexGrow={true} item={<TextField i={0} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={true} item={<TextField i={1} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={true} item={<TextField i={2} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={true} item={<TextField i={3} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={true} item={<TextField i={4} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={true} item={<TextField i={5} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={true} item={<TextField i={6} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={true} item={<TextField i={6} updateTextArray={this.record} />} />
                <TableCell shouldFlexGrow={false} item={<SubmitReagent  />} />
            </div>
        );
    }

}