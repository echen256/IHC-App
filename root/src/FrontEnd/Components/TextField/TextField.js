import React,{ Component} from "react";


export default class TextField extends Component{

    constructor (props){
        super(props);
        this.recordData = this.recordData.bind(this);
    }

    
    render(){
        
        return(
                <input onChange = {this.recordData} className = "input" type = "text" >
                </input>
          
        );
    }

   

    getData(){
        return this.state.text;
    }

    state = {
        text : '1'
    }

    componentDidMount(){
        this.props.updateTextArray(this.props.i,this.state.text)
    }
 
    recordData(event){
        var text = event.target.value;
        this.setState({text: text});
        this.props.updateTextArray(this.props.i,text)
    }

    updateTable(event){

        var text = event.target.value;
        console.log(this.state.filteredAutoFillOptions);
        this.setState({text: text});

    }

}