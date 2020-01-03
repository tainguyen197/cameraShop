import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import Header from "./container/Header/index";
import Footer from "./container/Footer/index";
import ProductPage from "./page/ProductPage";
import ContactPage from "./page/ContactPage";
import DetailProductPage from "./page/DetailProductPage";
import AboutPage from "./page/AboutPage"


import {ScrollToTop} from "./config/scrollToTop";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-alice-carousel/lib/alice-carousel.css'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/san-pham">
            <ProductPage/>
          </Route>
          <Route exact path="/chi-tiet">
            <DetailProductPage/>
          </Route>
          <Route exact path="/gioi-thieu" >
            <AboutPage/>
          </Route>
          <Route exact path="/lien-he">
            <ContactPage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
