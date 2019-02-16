import React from "react";
import Navbar from "./navbar";
import Board from "./board";

class ArrayPractice extends React.Component {
    constructor (props){
        super(props);
        this.state={
            counter : [1,2,3,4,5]
        }
       
    }
    
  render() {
    const element= [1,2,3,4,5];
    return (
       
      <div>
          {this.state.counter.map((number) => <li>{number}</li>)}
            <Board array={element} />
      </div>
    );
  }
}
export default ArrayPractice;