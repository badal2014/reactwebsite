import React from 'react';

export default class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status : 0
        }
    }
    componentWillMount(){
        console.log("component will mount execute");
        console.log(this.state.status);                
    }
    componentDidMount(){
        console.log("component did Mount execute");
    }
    shouldComponentUpdate(nextProps , nextState){
        console.log("shoulComponent Update"); 
        // console.log(this.state.status , nextState , nextProps); 
        return true               
    }
    componentWillUpdate(nextProps , nextState){
        console.log("component will update");  
        // console.log(this.state.status);        
    }
    componentWillReceiveProps(nextProps){
        console.log("component will receive props execute" ,nextProps.mount)

    }
    componentWillUnmount(){
        console.log("component will unmount");        
    }
    componentDidUpdate(nextProps , nextState){
        console.log("component did update"); 
        // console.log(this.state.status + nextState );       
    }
    render(){
        return(
            <div>
            <label>{this.state.status}</label>
                <button type="button" onClick={ () => this.setState({status:this.state.status+1})}> Update Status </button>
            </div>
        )
    }

}