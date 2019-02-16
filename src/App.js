import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './square';
import Board from './board';
import Game from './game';
import Practice from './practice';
import ShoppingCart from './shoppingCart';
import Navbar from "./navbar";
import Counters from './components/counters';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PracticePage from './practicePage';
import Timer from './timer';
import ArrayPractice from './arrayPractice';

class App extends Component {
  render() {


    return (

      // <div className="App">
      // <Navbar />
      // <Counters />

      //   {/* <Square /> */}
      //   {/* <Board /> */}
      //   {/* <Game /> */}
      //   {/* <Practice name={"badal"} age={27} user= {user} greet={this.helloMessage}/> */}
      //   {/* <ShoppingCart value={0}/> */}
      // </div>

      <HashRouter>
        <div>
          <Navbar />
          <Switch >
            <Route exact path="/" component={Counters} />
            <Route exact path="/Board" component={Board} />
            <Route exact path="/Game" component={Game} />
            <Route exact path="/practicePage" component={PracticePage} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/arrayPractice" component={ArrayPractice} /> 
          </Switch >
        </div>
      </HashRouter>
    );
  }
}

export default App;
