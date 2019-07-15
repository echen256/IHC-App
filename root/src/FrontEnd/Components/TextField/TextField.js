import React,{ Component} from "react";


export default class TextField extends Component{

    constructor (props){
        super(props);
        this.record = this.record.bind(this);
        this.export = this.export.bind(this);
        this.import = this.import.bind(this);
    }

    
    render(){
        
        return(
                <input ref ='input' onChange = {this.record} className = "input" type = "text" >
                </input>
          
        );
    }

    export(){
        return this.refs.input.value;
    }

    import(text){
        this.refs.input.value = text;
    }

    record (event){
        var text = event.target.value;
        this.setState({text: text});
    }
    state = {
        text : ''
    }
 

}