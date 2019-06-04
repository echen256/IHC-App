import React,{ Component} from "react";
import "./../../../App.css";
import TextField  from "./../../Components/TextField/TextField";
import {SubmitReagent} from "../../Components/SubmitReagent/SubmitReagent"
import { CustomTable , TableCell} from "../../Components/CustomTable/CustomTable";

export class Reagent extends Component{

    renderCells(){
       
        var cells = [];
        cells.push( <TableCell shouldFlexGrow = {true} item = { this.props.name}/> );
        for (var i = 0; i < this.props.numberOfTextFields;i++){
            cells.push(<TableCell shouldFlexGrow = {true} item = {  <TextField/>}/> );
        }
        cells.push(<TableCell shouldFlexGrow = {false} item = { <SubmitReagent />}/> );
        this.setState({cells : cells});
    
        return cells;
    }

    state = {
        cells : []
    }

    fetchData(){
        
        var cells = this.state.cells;
        console.log(cells);
        for (var i = 0; i < cells.length;i++){
            var cell = cells[i];
            var item = cell.props.item;
            console.log(item);
        }
    }

    componentDidMount(){
        this.renderCells();
    }

    render(){
        return(<div className = "flexRow">       
                    {this.state.cells}  
                    {this.fetchData()}                         
            </div>

        );
    }

}