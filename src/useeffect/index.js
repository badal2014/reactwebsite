import React from 'react';
import ApiReferenceHook from'./useEffectHook';

export default class ApiReference extends React.Component{

   
    render(){
        // console.log("in index"+ this.state.status);
        
        return(
            <div>
                <ApiReferenceHook />
            </div>
       )
    }
}