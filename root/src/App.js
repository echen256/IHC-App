import React, {Component} from 'react';

import './App.css';
import { Main } from "./FrontEnd/Pages/Main/Main"
import {Router, Switch, Route} from "react-router";
import { Navbar } from "./FrontEnd/Components/Navbar/Navbar"

export default class App extends Component{

  async componentDidMount() {
    const response = await fetch('/routing');
    
    const body = await response.json();
    
    if (response.status !== 200) {
      throw Error(body.message) 
    }
   
    return body;
  };

  render(){




    return (<div>
      <Navbar />
      <Main />
    </div>);
    
  } 



  
}
