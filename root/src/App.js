import React, {Component} from 'react';

import './App.css';
import { Main } from "./FrontEnd/Pages/Main/Main"

import { Navbar } from "./FrontEnd/Components/Navbar/Navbar"

export default class App extends Component{

  async componentDidMount() {
    const response = await fetch('/routing');
    
    const body = await response.json();
    console.log(body);
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
