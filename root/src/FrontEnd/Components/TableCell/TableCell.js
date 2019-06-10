import React, { Component } from "react";
import "./../../../App.css";

export default class TableCell extends Component{
    render(){
        return (<div className = {this.props.shouldFlexGrow ? "flexGrow1 customTableCell" : "customTableCell"}>{this.props.item}</div>);
    }
}

