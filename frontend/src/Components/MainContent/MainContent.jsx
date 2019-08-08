import React from "react";
import SideBar from "./SideBar/SideBar";
import "./MainContent.css";
import Products from "./Products/Products";
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.getCategories();
  }

  getCategories = async () => {
    const response = await fetch("https://localhost:5000/api/categories").catch(
      err => console.log(err)
    );
    const result = await response.json();
    this.setState({ categories: result.data });
  };

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
