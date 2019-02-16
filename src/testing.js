import React from "react";

class PracticePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
      

    };
}
componentDidMount(){
    this.timerId=setInterval(() => this.tick() , 1000);
}
componentWillUnmount(){
    clearInterval(this.timerId);
}
    



    
      render() {
        
        return (
            
            
            <div>


         
            </div>
        );
      }

    }

export default PracticePage;  