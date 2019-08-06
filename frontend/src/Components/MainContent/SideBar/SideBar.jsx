import React from "react";
import "./SideBar.css";
import SubMenu from "./SubMenu/SubMenu";
import Ads from "./Ads/Ads";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: ""
    };
  }

  categories = Object.keys(this.props.categories);

  render() {
    return (
      <div className="sideBar">
        <span className="all-categories">All categories</span>
        {this.categories.map((category, index) => {
          return (
            <div key={index}>
              <button
                className="category"
                id={category}
                onClick={() => {
                  //console.log(this.props.categories[category]);
                  this.setState(state => ({
                    activeCategory:
                      state.activeCategory === category ? "" : category
                  }));
                }}
              >
                {category}
              </button>
              <div className="subCategories">
                {this.state.activeCategory === category && (
                  <SubMenu subCategories={this.props.categories[category]} />
                )}
              </div>
            </div>
          );
        })}
        <Ads />
      </div>
    );
  }
}

export default SideBar;
