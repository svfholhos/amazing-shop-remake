import React from "react";
import "./Header.css";
import "./hamburgers.min.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import Navigation from "../Navigation/Navigation";
import Searchbar from "../Searchbar/Searchbar";
import MyCartButton from "../MyCartButton/MyCartButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleHamburger: ""
    };
  }

  toggleHamburger = () => {
    this.setState({
      toggleHamburger: this.state.toggleHamburger === "" ? " is-active" : ""
    });
  };
  render() {
    return (
      <div className="header-container">
        <div className="header-top-container">
          <Logo />
          <Contact />
          <Navigation />
        </div>
        <div className="header-bottom-container">
          <Searchbar />
          <MyCartButton />
        </div>

        <div className="mobile-menu">
          <button
            className={
              "hamburger hamburger--elastic" + this.state.toggleHamburger
            }
            type="button"
            onClick={this.toggleHamburger}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
            <span id="categ-name">Face</span>
          </button>

          <div className="mobile-search">
            <img src="icons/search_icon.png" alt="search" id="search-icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
