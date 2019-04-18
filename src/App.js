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
import ToDOList from './toDoList/toDoList';
import CallHook from './callHooks';
import ToDoHooks from './toDoApp/callToDoHook';
import practiceHooks from './hooksPractice.js';
import ApiReference from './useeffect';
import LifeCycle from './lifeCycle';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './redux/reducer';

class App extends Component {


  render() {

    const store = createStore(combineReducer, applyMiddleware(thunk));
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
      <Provider store={store}>
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
              <Route exact path="/practice" component={Practice} />
              <Route exact path="/toDoList" component={ToDOList} />
              <Route exact path="/callHooks" component={CallHook} />
              <Route exact path="/toDoHooks" component={ToDoHooks} />
              <Route exact path="/practiceHooks" component={practiceHooks} />
              <Route exact path="/ApiReference" component={ApiReference} />
              <Route exact path="/LifeCycle" component={LifeCycle} />
            </Switch >
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
