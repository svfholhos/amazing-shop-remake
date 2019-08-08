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

  render() {
    return (
      <div className="sideBar">
        <span className="all-categories">All categories</span>

        {this.props.categories.map((category, index) => {
          return (
            <div key={index}>
              <button
                className="category"
                id={category.name}
                onClick={() => {
                  this.setState(state => ({
                    activeCategory:
                      state.activeCategory === category.name
                        ? ""
                        : category.name
                  }));
                }}
              >
                {category.name}
              </button>
              <div className="subCategories">
                {this.state.activeCategory === category.name && (
                  <SubMenu subCategories={category} />
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
