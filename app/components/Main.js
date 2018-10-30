import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Switch />
        </main>
      </Router>
    );
  }
}

export default Main;
