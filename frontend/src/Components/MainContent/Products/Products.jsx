import React, { Component } from "react";
import "./Products.css";
import "../Filter/Filter";
import Filter from "../Filter/Filter";
import Product from "./Product/Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts();
  }

  getProducts = async () => {
    const response = await fetch("https://localhost:5000/api/products").catch(
      err => console.log(err)
    );
    const products = await response.json();
    this.setState({ products });
  };

  render() {
    return (
      <div className="products-wrapper">
        <div className="content-header">
          <div className="content-header-text">
            <h2 id="category-title">Creams & gels</h2>
          </div>

          <div className="pagination">
            <h4>Showing 60 of 392</h4>
            <div className="arrows">
              <span className="arrow-left">
                <i className="fas fa-chevron-left" />
              </span>
              <span className="arrow-right">
                <i className="fas fa-chevron-right" />
              </span>
            </div>
          </div>
        </div>
        <Filter />
        <hr />
        <div id={"products"}>
          {this.state.products.map((item, index) => {
            return <Product product={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Products;
