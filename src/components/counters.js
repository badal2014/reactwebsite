import React from "react";
 import App from '../App';
import ShoppingCart from "../shoppingCart";
import Navbar from "../navbar";
import {connect} from 'react-redux';
import { fetchData} from '../redux/fetch/action';
import { matchMovie } from '../redux/movieMatch/action';

class Counters extends React.Component{
    constructor(props){
        super();
        this.state={
            counter: [
                {id: 1 , value: 4},
                {id: 2 , value: 0},
                {id: 3 , value: 0},
                {id: 4 , value: 0},
            ],
            // value : 0,
        }
    }
    handleIncrement = (itemIncrement) => {

        const counter = this.state.counter.filter(e => e.id == itemIncrement ? e.value = e.value+1 : e)
        this.setState({
            counter
        }) 
        // counter.map(counter => counter[itemIncrement].value+1);
        // const counters = this.state.counter.filter(c => c.id == itemIncrement) ;
        // console.log(counters[0].value +1);

        
        // var conn = counters[0].value +1;

        // this.setState({
        //     counters[itemIncrement] : counters
        // })
        

        // const count = this.state.counter.filter(c => c.id == itemIncrement);
        // console.log(counter[itemIncrement]);
        // var inc = counter[itemIncrement]
        // var incf = inc.value +1;
        // this.setState({
        //     counter: counter.value + 1
        // })
        // console.log(counter[0].id);
        
        // for(let i=0 ; i<counter.length ; i++){
            // console.log(this.state.counter[i].id);
            // this.state.counter.id == itemIncrement ? counter.id[itemIncrement] + 1 : null;
            
            // if(counter[i].id == itemIncrement){
            //     this.setState({
            //         counter :counter[i]+ 1
            //     })
            // }
        // }
        // this.state.counter.id == itemIncrement ? this.setState({ })
        
                

    }
    handleDelete = (itemDelete) => {
        const counters = this.state.counter.filter(c => c.id !== itemDelete);
        this.setState({
            counter: counters
        })
        
    }
    handleReset= () => {
        const count = this.state.counter.map((c,key) => {c.value = 0;
        return c;})
        this.setState({
            counter : count
        })
    }

   
    render() {
        console.log(this.props);
        
       
        return (
            <div> 
                {this.props.fetch.fetch.data.length == 0 ? null : this.props.fetch.fetch.data.data.map((d,k) => (<p key={k}>{d.id}</p>))}
                {this.props.movie.movie.data.length == 0 ? null : this.props.movie.movie.data.data.map((d,k) => (<p key={k}>{d.id}</p>))}                
                <button onClick={() => this.props.dispatch(fetchData())}>dispatch</button>
                <button onClick={() => this.props.dispatch(matchMovie())}>dispatch</button>

                <button type="button" onClick={this.handleReset}>Reset</button>
                {this.state.counter.map((count, key) => <ShoppingCart key={key} {...this.props} counter ={count} onIncrement={this.handleIncrement} onDelete={this.handleDelete}  >                  
                </ShoppingCart>)}       
            </div>
        );
      }
}

const mapStateToProps = (e) => {
    console.log(e);
    
    return {
        fetch: e.fetch,
        movie: e.movie
    }
    
}

export default connect(mapStateToProps)(Counters);  
