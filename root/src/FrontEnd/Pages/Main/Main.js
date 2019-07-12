import React, { Component } from "react";


import "./../../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AddSlide } from "../AddSlide/AddSlide";
import {LoadExperiment} from "../LoadExperiment/LoadExperiment";


export class Main extends Component {

  constructor(props){
    super(props);
   
  }



  render() {
    return (
      <Router>
        <Route path = '/home' component = {AddSlide}/>
        <Route path ='/load'component = {LoadExperiment} />
        
      

      </Router>
      
    );
  }
}
