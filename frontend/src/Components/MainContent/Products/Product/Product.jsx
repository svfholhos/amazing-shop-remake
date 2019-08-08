import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div className="product" id={this.props.product.id}>
        <img
          src={this.props.product.img}
          alt="this.props.product.name"
          className="product-img"
        />
        <h4>{this.props.product.name}</h4>
        <span className="price">
          {this.props.product.price} {"\u20AC"}
        </span>
        <button className="add-to-cart">Add to cart</button>
      </div>
    );
  }
}

export default Product;
