import React, { Component } from "react";


import "./../../../App.css";
import TableCell  from "./../../Components/TableCell/TableCell";
import {SubmitReagent} from "../../Components/SubmitReagent/SubmitReagent"
import {Reagent} from "./../../Components/Reagent/Reagent"
import TextField from "./../../Components/TextField/TextField"
import {SlideInfo} from './../../Components/SlideInfo/SlideInfo'
import Axios from "axios";

class ReagentData {

  data = {
    
  }

  constructor(type,name,catalog,lot, expDate,notes){
      this.data.type = type;
      this.data.name = name;
      this.data.catalog = catalog;
      this.data.lot = lot;
      this.data.expDate = expDate;
      this.data.notes = notes;
  }
}

export class AddSlide extends Component {

  constructor(props){
    super(props);
    this.updateSlideInfo = this.updateSlideInfo.bind(this);
    this.updateReagents = this.updateReagents.bind(this);
    this.submitExperiment = this.submitExperiment.bind(this);
  }



  

  state = {
    slideRef : {},
    reagentRefs : []
  }

  componentDidMount(){
    
    var slideRef = React.createRef();
    var reagentRefs = [];
    for (var i = 0; i < 8;i++ ){
      reagentRefs.push(React.createRef());
    }
    this.setState({
      slideRef : slideRef, reagentRefs : reagentRefs
    })

  }

  submitExperiment(){

      var reagentRefs = this.state.reagentRefs;
      var promises = [];
      var complete = true;

 
      for (var i = 0; i < reagentRefs.length;i++){
        var data = reagentRefs[i].current.export();
        console.log(data);
        if (data !== ''){
          promises.push(Axios.post("/submit/reagent", data ));   
        } else {
           
           complete = false;
        }
        
      }

      var slideRef = this.state.slideRef;
      if (slideRef !== '') {
        promises.push(Axios.post("/submit/slide", slideRef.current.export() ));
      } else {
        complete = false;
      }
   
     

      if (complete){
        Promise.all(promises).then(function(res){
          console.log(res);
          var slide = res[res.length -1];
          var experiment = {
            slide : slide.data.id,
            pretreatment : res[0].data.id,
            tissuePrimer : res[1].data.id,
            backgroundBlocker : res[2].data.id,
            antibody : res[3].data.id,
            linker : res[4].data.id,
            tracer : res[5].data.id,
            chromogen : res[6].data.id,
            counterStain : res[7].data.id
          }
          Axios.post('/submit/experiment', experiment).then(function(res){
            console.log(res);
          });
        });
      } else {
        console.log('incomplete form');
      }
      
  }
 
  updateSlideInfo(dataSlot,slide){
    this.experiment.slide = slide;
  }

  updateReagents(dataSlot, reagent){
    this.experiment.reagents[dataSlot] = reagent;
  }


  loadExperiment(experiment){
     
  }
  

  render() {
    return (
      <div className = "App">

        
        <div className = "vert-margin-5">
        <div className = "vert-margin-5 customTable" >

            <div onClick = {this.submitExperiment}>  X </div>
            <div>
              <div className = "tableTitle">
                Experiment Conditions
              </div>
            </div>

            <div className = 'flexRow'>
              <TableCell shouldFlexGrow = {true} item = { "Tissue ID"}/>
              <TableCell shouldFlexGrow = {true} item = { "Tissue Type"}/>
              <TableCell shouldFlexGrow = {true} item = { "Dilution Factor"}/> 
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Name"}/> 
              <TableCell shouldFlexGrow = {true} item = {"Tested Reagent Catalog Number"}/> 
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Lot"}/> 
              <TableCell shouldFlexGrow = {true} item = {"Tested Reagent Exp Date"}/>    
              <TableCell shouldFlexGrow = {true} item = { "Tested Reagent Notes"}/> 
              <TableCell shouldFlexGrow = {false} item = { "Save"}/> 
            </div>

            <SlideInfo ref = {this.state.slideRef} getRoute = '/get/slide' saveRoute = '/submit/slide'/>
           
        </div>

  
        </div>



        <table className = "vert-margin-5 customTable" ><tr>
              <div className = "tableTitle">
                Reagents Used
              </div>
            </tr>
            <tr className = 'flexRow'>
                <TableCell shouldFlexGrow = {true} item = { "Reagent Type"}/> 
                <TableCell shouldFlexGrow = {true} item = {  "Reagent Name"}/>
                <TableCell shouldFlexGrow = {true} item = {  "Reagent Catalog Number"}/> 
                <TableCell shouldFlexGrow = {true} item = { "Reagent Lot"}/> 
                <TableCell shouldFlexGrow = {true} item = { "Reagent Exp Date"}/> 
                <TableCell shouldFlexGrow = {true} item = { "Reagent Incubation Time"}/>
                <TableCell shouldFlexGrow = {true} item = { "Reagent Notes"}/> 
                <TableCell shouldFlexGrow = {false} item = { "Save"}/> 
            </tr>
          <Reagent ref = {this.state.reagentRefs[0]} parent = {this} name = 'PreTreatment'  getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = {this.state.reagentRefs[1]} parent = {this} name = 'Tissue Primer'  getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = {this.state.reagentRefs[2]} parent = {this} name = 'Background Blocker' getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = {this.state.reagentRefs[3]} parent = {this} name = 'Antibody'   getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = {this.state.reagentRefs[4]} parent = {this} name = 'Linker' getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = {this.state.reagentRefs[5]} parent = {this} name = 'Tracer'   getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = {this.state.reagentRefs[6]} parent = {this} name = 'Chromogen'  getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
          <Reagent ref = {this.state.reagentRefs[7]} parent = {this} name = 'Counterstain'   getRoute = '/get/reagent' saveRoute = '/submit/reagent'/>
        </table>

      </div>
    );
  }
}