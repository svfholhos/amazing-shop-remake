import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.item);
    return (
      <div className="product" id={this.props.item.id}>
        {this.props.item.name}
      </div>
    );
  }
}

export default Product;
