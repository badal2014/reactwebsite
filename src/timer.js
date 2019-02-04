import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
        date: new Date(),
    };
}
componentDidMount(){
    this.timerId=setInterval(() => this.tick() , 1000);
}
componentWillUnmount(){
    clearInterval(this.timerId);
}
    
tick() {
    this.setState({
        date: new Date()
    });
}

    
      render() {
        return (
            <div>
                <h1>Hello My First Clock</h1>
                <h2>Time is  {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
      }

    }

export default Timer;  