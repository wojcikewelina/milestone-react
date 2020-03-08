import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Hello from "./Hello";
import "./style.css";
import NavigationBar from "./components/navigationBar";
import PeoplePage from "./views/peoplePage";
import HomePage from "./views/homePage";
import ContactPage from "./views/contactPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/people" component={PeoplePage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } 
}

render(<App />, document.getElementById("root"));
