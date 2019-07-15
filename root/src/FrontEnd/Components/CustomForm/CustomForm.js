import React, { Component, useReducer } from "react";
import "./../../../App.css";
import TextField from "./../../Components/TextField/TextField";
import { SubmitReagent } from "../../Components/SubmitReagent/SubmitReagent"
import Axios from "axios";
import TableCell from "./../../Components/TableCell/TableCell"

export class CustomForm extends Component {

    constructor(props) {
        super(props);
        this.export = this.export.bind(this);
        this.import =this.import.bind(this);
    }

    import(data){
        var values = Object.values(data);
        var refs = this.state.refs;
        for (var i = 0; i < refs.length;i++){
            refs[i].current.import(values[i])
        }
    }

    state = {
        refs : [],
        textFields : [],
    }

    numberOfTextFields = 0;

    export(){
        var refs = this.state.refs;
        var formComplete = true;
        for (var i = 0; i < refs.length;i++){
            var text = refs[i].current.export();
            if (text === ""){
                formComplete = false;
            } 
        }

        if (formComplete){
           return this.constructObjectFromData();
            
        }
        
        return '';
    }

    
    componentDidMount(){
        var response = this.generateTextFields(this.numberOfTextFields);
        this.setState({refs: response.refs, textFields : response.textFields});
    }

    generateTextFields(numberOfTextFields ){
        var textFields = [];
        var refs = [];
        for (var j = 0; j < numberOfTextFields;j++){
            var ref = React.createRef();
            refs.push(ref);
            textFields.push(<TableCell shouldFlexGrow={true} item={<TextField parent = {this} ref = {ref}/>}/>)
        }
        return {textFields: textFields, refs : refs}
    }

    get(){
        var packageSuccessful = this.packageData();
        if (packageSuccessful){
            Axios.post(this.props.getRoute,this.data).then(function(res){
                console.log(res);
            });
            } else {
            console.log("invalid data, missing info")
        }
    }

    save() {
        var packageSuccessful = this.packageData();
        if (packageSuccessful){
            Axios.post(this.props.saveRoute,this.data
            ).then(function(res){
                console.log(res);
            })
        } else {
            console.log("invalid data, missing info")
        }
       
    }

    render() {
        return (
            <div></div>
        );
    }

}