import React from "react";
import Square from './square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          number: props.array,
          inputVal:"",
          selectName:"",
          error:false,
        };
      }
  
    renderSquare(i) {
      return <Square value={i} />;
    }

    handleChange(e){
      if(e.target.id=="text"){
        this.setState({
          inputVal:e.target.value,
        })
      }
      if(e.target.id=="selectName"){
        this.setState({
          
          
          selectName:e.target.value,
        })
      }
     
    }
    handleSubmit(e){
      if(this.state.inputVal == ""){
        this.setState({
          error:true,
        })
      }
          else{
            this.setState({
              error:false,
            })
          }
        // alert(th/is.state.inputVal + this.state.selectName);
      
    }
    render() {
      const status = 'Next player: X';
      const{inputVal}=this.state
      console.log(this.state.inputVal);
      
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

        <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" value={this.state.inputVal} id="text" onChange={(e) => this.handleChange(e)} />
            {this.state.error ? <span>Plaese Fill THis</span> : null}
            <select id="selectName" value={this.state.selectName} onChange={(e) => {this.handleChange(e)}}>
              <option value="badal"> Badal</option>
              <option value="Suman">Suman</option>
              <option value="Sahil">Sahil</option>
              <option value="Kavita">Kavita</option>
            </select>
            <button type="button" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
        </div>
      );
    }
  }
  
export default Board;