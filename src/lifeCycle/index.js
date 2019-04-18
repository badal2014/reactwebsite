import React from 'react';
import LifeCycleMethods from './methods';

export default class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mount : true,
        }
    }
    render(){
        return(
            <div>
                <button type="button" onClick={() => this.setState({mount : true})} disable={this.state.mount}>Mount Counter</button>
                <button type="button" onClick={() => this.setState({mount : false})} disable={this.state.mount}>UnMount Counter</button>
                {this.state.mount ? <LifeCycleMethods mount={this.state.mount}/> : null }
                
            </div>
        )
    }
}



