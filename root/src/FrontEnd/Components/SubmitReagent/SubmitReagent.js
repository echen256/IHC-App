import React, { Component } from "react";
import "./../../../App.css";
import Axios from 'axios';

export class SubmitReagent extends Component {

  flexGrow = 0;

  render() {
    return (
    
        <div onClick = {this.props.onClick} className = 'flexGrow0 submitReagent'>
             { this.state.savedSuccessfully ? "O" : 
               String.fromCharCode(2713)
               }
        </div>

    );
  }
  state = {
    savedSuccessfully : false
  }
}
