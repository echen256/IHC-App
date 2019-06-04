import React, { Component } from "react";
import "./../../../App.css";
import TextField from "../TextField/TextField"


export class TableCell extends Component{
    render(){
        return (<div className = {this.props.shouldFlexGrow ? "flexGrow1 customTableCell" : "customTableCell"}>{this.props.item}</div>);
    }
}


export class CustomTable extends Component {

    state = {
        table : []
    }
    
    componentDidMount(){
        this.setState({table: this.props.table})
    }

    updateTable(){
        console.log(this.state.table);
    }
 
    generateTable(table){
        var htmlTable = []
        for (var i = 0; i < table.length;i++ ){
            var row =  [];
            for (var j = 0; j < table[i].length; j++){
                var item = table[i][j];

                row.push(item);
            }
            htmlTable.push(<div className = "flexRow">{row}</div>)
       
        }
        return <div>{htmlTable}</div>;
    }

  render() {
    return (
    
        <div style = {{width:"100%"}}>
           <div className = "tableTitle"> {this.props.title} </div>
           {
               this.generateTable(this.props.table)
             
           }  
        </div>

    );
  }
}
