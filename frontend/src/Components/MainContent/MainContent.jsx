import React from "react";
import SideBar from "./SideBar/SideBar";
import "./MainContent.css";
import Products from "./Products/Products";
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        face: [
          "Creams & Gels",
          "Patches",
          "Emulsions",
          "Toners",
          "Face Cleasing",
          "Make up removal",
          "Scrubs",
          "Peeling",
          "Masks"
        ],
        body: ["asfsdf", "sdfsdf"],
        foot: ["bla"],
        hands: [],
        hair: [],
        makeUp: []
      }
    };
  }

  render() {
    return (
      <div className="main-content">
        <SideBar categories={this.state.categories}> </SideBar>
        <Products />
      </div>
    );
  }
}

export default MainContent;
