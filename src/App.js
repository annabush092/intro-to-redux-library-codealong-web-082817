import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCount} from './actions.js'

import './App.css';

class App extends Component {

  handleOnClick = (ev) => {
     this.props.increaseCount();
   }

  render() {
    return (
      <div className="App">
      <button onClick={this.handleOnClick}>Click Me!</button>
      <p>{this.props.counter}</p>
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return { counter: state.counter }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { increaseCount: increaseCount},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
