import React, { Component } from 'react';
import logo from './logo.svg';
import routes from './Routes/index';
import { BrowserRouter, Route, Switch, Redirect, Link, } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./Actions";
import Beer from './Containers/Beer';

import './App.css';


class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header> */}
          <Beer params={this.props} {...this.props}/>
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(store) {
  return {
    beer : store.Beer,
    BeerSearch : store.BeerSearch
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps)(Main);
export default App;
