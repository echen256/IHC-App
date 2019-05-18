import React, { Component } from "react";
import { TextField } from "./../../Components/TextField/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./../../../App.css";
import { CustomTable } from "../../Components/CustomTable/CustomTable";





export class Main extends Component {
  state = {
    items: [
      "Pretreatment",
      "Tissue Primer",
      "Background Blocker",
      "Antibody",
      "Linker",
      "Tracer",
      "Chromogen",
      "Counter Stain"
    ]
  };


 

  render() {
    return (
      <div className = "App">

        




        <div className = "vert-margin-5">
        <CustomTable title = "Independent Variables" table =  { [
            ["Tissue Type", "Dilution Factor", "Tested Reagent Type", "Tested Reagent Name", "Tested Reagent Lot",
            "Tested Reagent Exp Date", "Tested Reagent Catalog Number", "Tested Reagent Notes"],
            ["","","","","","","",""],
        ]}/>
        </div>



        <div className = "vert-margin-5">
            <CustomTable title = "Dependent Variables" table =  { [
              ["Reagent Type", "Reagent Name", "Reagent Catalog Number", "Reagent Lot", "Reagent Exp Date", "Reagent Incubation Time", "Reagent Notes"],
              ["Pretreatment","","","","","",""],
              ["Tissue Primer", "","","","","",""],
              ["Background Blocker", "","","","","",""],
              ["Antibody", "","","","","",""],
              ["Linker","","","","","",""],
              ["Trancer", "","","","","",""],
              ["Chromogen", "","","","","",""],
              ["Counter Stain", "","","","","",""],
          ]} />
        </div>
      



      

       
      </div>
    );
  }
}
