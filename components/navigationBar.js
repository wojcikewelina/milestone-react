import React, { Component } from "react";
import { Link } from "react-router-dom";

let navButtons;

class NavigationBar extends Component {
  componentDidMount() {
    navButtons = document.getElementsByClassName("nav-button");
  }

  changeActiveButton(event) {
    for (var i = 0; i < navButtons.length; i++) {
      navButtons[i].setAttribute("class", "nav-button");
    }
    let curretnAtr = event.target.getAttribute("class");
    event.target.setAttribute("class", `nav-button active-button`);
  }

 

  render() {
    return (
      <header>
        <nav>
          <Link to="/">
            <button className="nav-button" onClick={this.changeActiveButton}>
              Home
            </button>
          </Link>
          <Link to="/people">
            <button className="nav-button" onClick={this.changeActiveButton}>
              People
            </button>
          </Link>
          <Link to="/contact">
            <button className="nav-button" onClick={this.changeActiveButton}>
              Contact
            </button>
          </Link>
        </nav>
      </header>
    );
  }
}

export default NavigationBar;
