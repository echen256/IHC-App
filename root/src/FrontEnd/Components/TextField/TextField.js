import React,{ Component} from "react";


export default class TextField extends Component{


    render(){
        return(<div>
                <form >
                    <input onChange = {this.updateTable.bind(this)}  className = "input" type = "text">
                    </input>
                </form>
                { this.state.showSuggestions ? this.populateFilteredSuggestionsList() : <div/>}
             </div>
        );
    }

    state = {
        text : '',
        autofillOptions : ["12345","7546546","4234"],
        showSuggestions : true,
        filteredSuggestions : []
    }
 
    populateFilteredSuggestionsList(){
        var list = [];
        var filteredSuggestions = this.state.autofillOptions;
        for (var i = 0; i < Math.min(3,filteredSuggestions.length) ;i++){
            list.push(<li>{filteredSuggestions[i]}</li>)
        }
        return (
            <ul style = {{overflow : 'visible', height : '0px',zIndex : '5',backgroundColor : 'white'}} >
                {list.map( x=> x)}
            </ul>
        )
    }

    updateTable(event){

        var text = event.target.value;
        this.state.filteredAutoFillOptions = this.state.autofillOptions.filter(x=> x.includes(text));
        console.log(this.state.filteredAutoFillOptions);


       
        this.setState({text: text});
        var table = this.props.parent.state.table;
        var i = this.props.i;
        var j = this.props.j;
        table[i][j] = text;
    }

}