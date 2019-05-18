import React,{ Component} from "react";


export default class TextField extends Component{


    render(){
        return(<div>
                <form >
                    <input onChange = {this.updateTable.bind(this)}  className = "input" type = "text">
                    </input>
                </form>

             </div>
        );
    }

    state = {
        text : ''
    }
 

    updateTable(event){
        var text = event.target.value;
        this.setState({text: text});
        var table = this.props.parent.state.table;
        var i = this.props.i;
        var j = this.props.j;
        table[i][j] = text;
        console.log(table[i][j]);
    }

}