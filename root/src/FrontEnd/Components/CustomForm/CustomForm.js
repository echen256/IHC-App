import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import Axios from "axios";
import TableCell from "./../../Components/TableCell/TableCell"

export class CustomForm extends Component {

    constructor(props) {
        super(props);
        this.record= this.record.bind(this);
        //this.save = this.save.bind(this);
        //this.get = this.get.bind(this);
        this.packageData = this.packageData.bind(this);
        this.getRoute = props.getRoute;
        this.saveRoute = props.saveRoute;
    }

    record(i, text) {
        var localTextArray = this.state.textArray;
        localTextArray[i] = text;
        this.packageData();
    }

    state = {
        textArray: ['','','','','',''],
    }

    data = {}
    getRoute = '';
    saveRoute = '';

    constructObjectFromData(){

    }

    packageData(){
        var textArray = this.state.textArray;
        var formComplete = true;
        for (var i = 0; i < textArray.length;i++){
            if (textArray[i] === ""){
                formComplete = false;
            } 
        }
        if (formComplete){
            this.constructObjectFromData(textArray);
            this.props.export(this.props.dataSlot,this.data);
        }
        
        return formComplete;
    }

   /* save() {
        var packageSuccessful = this.packageData();
        if (packageSuccessful){
            Axios.post(this.saveRoute,this.data
            ).then(function(res){
                console.log(res);
            })
        } else {
            console.log("invalid data, missing info")
        }
       
    }

    get(){
        var packageSuccessful = this.packageData();
        if (packageSuccessful){
            Axios.post(this.getRoute,this.data).then(function(res){
                console.log(res);
            });
            } else {
            console.log("invalid data, missing info")
        }
    }*/

    render() {
        return (
            <div></div>
        );
    }

}