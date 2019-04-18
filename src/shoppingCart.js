import React from "react";

class ShoppingCart extends React.Component{

// formatCount(){
//     const {count} = this.state ;
//     return count === 0 ? 'zero' : count;
// }
    render() {
       
        return (
            <div> 
                  <span className={this.props.counter.value == 0 ?  "badge badge-primary m-2" : "badge badge-warning m-2"}>{this.props.counter.value == 0 ? 'zero' : this.props.counter.value}</span>                 
                  <button onClick={(e) => this.props.onIncrement(this.props.counter.id)} className="btn btn-secondary btn-sm">Increment</button>
                  {/* <button onClick={(e) => this.setState({count : count-1})} className="btn btn-secondary btn-sm m-2">Decrement</button> */}
                  <button type="button" onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                    {/* {console.log(this.props.id)} */}







{/* ------------------------------------------------------------array---------------------------- */}
                  {/* {this.state.tags.length == 0 ? <p>There are No tags </p> : 
                <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}

              </ul>} */}
{/* ------------------------------------------------------------array---------------------------- */}

                  
            </div>
        );
      }}

   

export default ShoppingCart;  