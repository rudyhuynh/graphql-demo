import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { OrderContainer } from "./modules/order/index";
// import {graphql, QueryRenderer} from 'react-relay'
// import environment from './relay-config/environment'
// import RoleDice from './RoleDice';
import { Route, Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();
class App extends Component {
  componentDidMount() {
    if (customHistory.location.pathname === "/") {
      customHistory.push("/order/1");
    }
  }
  render() {
    return (
      <div>
        <Router history={customHistory}>
          <Route path="/order/:step" component={OrderContainer} />
        </Router>
      </div>
    );
  }
}

export default App;
