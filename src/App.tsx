import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/common/Home";
import SignUpForm from "./components/forms/SignUpForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/registreer" component={SignUpForm} />
        </div>
      </Router>
    );
  }
}

export default App;
