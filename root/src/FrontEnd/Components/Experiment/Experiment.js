import React, { Component } from "react";

import "./../Experiment/style.css";
import img from "./../Experiment/download.png"

export class Experiment extends Component {

    state = {
        display : false
    }

    constructor(props){
        super(props);
        this.triggerDisplay = this.triggerDisplay.bind(this);
    }
renderInfo(){
    return (
        <div className="experimentContainer">
        <div className="data">
          <img src={img} width="200px" height="200px" />
        </div>

        <div className="data desc">
         

          <div className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </div>
        </div>

        <div className="data">
          <div className="header"> Reagent Tested</div>

          <div className="content">
            <div>Name:{this.props.name}</div>
            <div>Catalog:{this.props.catalog}</div>
            <div>Lot{this.props.lot}</div>
            <div>Exp:{this.props.expirationDate}</div>
          </div>
        </div>
      </div>
    );
}
    triggerDisplay(){
        this.setState({display: ! this.state.display});
    }

  render() {
    return (
      <div className = 'experiment'>



        <div className="title" >
          Title: {this.props.title}
          <div onClick = {this.triggerDisplay} style = {{float:"right"}}> ></div>
          <div style = {{float:"right"}}>Experiment Date: {this.props.createdAt}</div>
          
        </div>
        
        {this.state.display ? this.renderInfo() : <div/>}

    
       
      </div>
    );
  }
}
