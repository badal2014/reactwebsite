import React from "react";
import Navbar from "./navbar";

class Square extends React.Component{
    state={
      value:null,
    }
    

      render() {
        return (
          <button className="square" onClick={() => this.setState({value : 'x'})}>
            {/* TODO */}
            {this.state.value}
          </button>
        );
      }
}
export default Square;  