import React from "react";
import Square from './square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          number: props.array,
          error:false,
          inputVal:"",
        };
      }
      
      handleChange(e){
        if(e.target.id=="inp"){
          this.setState({
            inputVal: e.target.value
          })
        }
      }
      errorMsg(){
        if (this.state.inputVal==""){
          this.setState({
            error: true,
          })
        }
        else{
          this.setState({
            error: false,
          })
        }

      }
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
      const{inputVal}=this.state
  
      return (
        <div>
          badal
         
          {/* {this.state.number.map((array) => <li>{array}</li>)} */}
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>


          <input type="text" id="inp" value={inputVal} onChange={(e) => this.handleChange(e)}/>
          {this.state.error ? <span>please Fill</span> : null}
          <button type="button" onClick={() => this.errorMsg()}>OK</button>
        </div>
      );
    }
  }
  
export default Board;