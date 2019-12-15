import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import Header from "./container/Header/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-alice-carousel/lib/alice-carousel.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/san-pham">
            AAAA
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
