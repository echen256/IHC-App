import React,{ Component} from "react";


export default class TextField extends Component{

    constructor (props){
        super(props);
        this.recordData = this.recordData.bind(this);
    }

    
    render(){
        
        return(
                <input onChange = {this.recordData} className = "input" type = "text">
                </input>
          
        );
    }

    getData(){
        return this.state.text;
    }

    state = {
        text : '',
       // autofillOptions : ["12345","7546546","4234"],
       // showSuggestions : true,
       // filteredSuggestions : []
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


    recordData(event){
        var text = event.target.value;
        this.setState({text: text});
        this.props.updateTextArray(this.props.i,text)
    }

    updateTable(event){

        var text = event.target.value;
       // this.state.filteredAutoFillOptions = this.state.autofillOptions.filter(x=> x.includes(text));
        console.log(this.state.filteredAutoFillOptions);
        this.setState({text: text});

    }

}