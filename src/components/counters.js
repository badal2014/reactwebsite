import React from "react";
 import App from '../App';
import ShoppingCart from "../shoppingCart";
import Navbar from "../navbar";

class Counters extends React.Component{

    state = {
        counter : [
            {id:1 , value: 4},
            {id:2 , value: 0},
            {id:3 , value: 0},
            {id:4 , value: 0},
        ],
        name : 0,
    }
    incrementCounter = getValue => {
        // const newArray = [...this.state.counter];
        // newArray[0].value++;\
        // const count = this.state.counter.name;
        // console.log(this.state.counter.name);
        
        
        
        
    };
    handleDelete =(counterId) =>{
            console.log(this.state.counter.filter(b => b.id !==counterId));
            const counter =this.state.counter.filter(b => b.id !== counterId);
            this.setState({counter});
            // return counter;
    }
 
    render() {
       
        return (
            <div> 
                  { this.state.counter.map(counter => <ShoppingCart key={counter.id} onDelete={this.handleDelete} passState={counter} incrementCounter={this.incrementCounter}/>)}
                  {/* <ShoppingCart /> */}                  
            </div>
        );
      }
}
export default Counters;  