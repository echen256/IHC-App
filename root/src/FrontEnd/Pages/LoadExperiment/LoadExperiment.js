import React, {Component} from 'react';
import Axios from "axios";
import "./../LoadExperiment/style.css";
import {Experiment} from "./../../Components/Experiment/Experiment"
import moment from 'moment';

export class LoadExperiment extends Component{

   state = {
       experiments : []
   }

    requestExperiments(){
        var output = []
        var promises = [];
        var self = this;
        Axios.post("/get/experiment",{index : 0, numberOfResults : 10}).then(function(res){
            
            var data = res.data.results;
            for (var i = 0; i < data.length;i++){
                promises.push(Axios.get("/get/slide/" +  data[i].slide ));
            }

            Promise.all(promises).then(function(response){
               for (var i = 0; i < response.length;i++){
                   var slide = response[i].data[0];
                  
                   output.push(<Experiment createdAt = {moment(slide.createdAt).format("MM/DD/YYYY")} title = {"XXXX"} name = {slide.name} catalog = {slide.catalog} lot = {slide.lot} 
                   
                   expeirationDate = {slide.expeirationDate}/>);
               }
              self.setState ({experiments : output});
            });
        });
    }

    loadExperiment(index){
        var experiment = this.state.experiments[index];
        
    }

    componentDidMount(){
        this.requestExperiments();
    }

  render(){

    return (
    
    <div className = 'container'>

        <div >{
           this.state.experiments
        }</div>

    </div>);
    
  } 



  
}
