import React, { Component } from "react";
import "./../../../App.css";
import Axios from 'axios';

export class SubmitReagent extends Component {

    flexGrow = 0;

  render() {
    return (
    
        <div onClick = {this.props.onClick} className = 'flexGrow0'>
            >
        </div>

    );
  }

  submit(){
    Axios.post()
  }
}
