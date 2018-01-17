import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {graphql, QueryRenderer} from 'react-relay'
import environment from './relay-config/environment'
import RoleDice from './RoleDice';

class App extends Component {
  render() {
    return (
      <RoleDice />
    );
  }
}

export default App;
