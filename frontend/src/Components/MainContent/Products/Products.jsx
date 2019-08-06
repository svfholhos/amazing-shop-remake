import React, { Component } from "react";
import "./Products.css";
import "../Filter/Filter";
import Filter from "../Filter/Filter";
import Product from "./Product/Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        face: [
          {
            id: 0,
            img: "/img/products-img/prod1.jpg",
            name: "Missha All Around Safe Block Sebum Zero Sun",
            price: 4.99
          },
          {
            id: 1,
            img: "/img/products-img/prod2.jpg",
            name: "Claire’s Cloud 9 Blanc De Whitening Cream",
            price: 20.0
          },

          {
            id: 2,
            img: "/img/products-img/prod3.jpg",
            name: "Scinic Honey Banana Cleansing Foam",
            price: 4.0
          },

          {
            id: 3,
            img: "/img/products-img/prod4.jpg",
            name: "Cosrx Advanced Snail 92 All in One Cream",
            price: 24.0
          },

          {
            id: 4,
            img: "/img/products-img/prod5.png",
            name: "Innisfree Green Tea Balancing Cream",
            price: 18.0
          },

          {
            id: 5,
            img: "/img/products-img/prod6.jpg",
            name: "Skin79 Fresh Garden Mask - Snail",
            price: 2.0
          },

          {
            id: 6,
            img: "/img/products-img/prod7.jpg",
            name: "Tonymoly Pure Eco Snail Moisture Gel",
            price: 8.0
          },

          {
            id: 7,
            img: "/img/products-img/prod8.jpg",
            name: "Innisfree Canola Honey Mask",
            price: 14.0
          }
        ]
      }
    };
  }

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
        <div className="product-list">
          {this.state.products.face.map((item, index) => {
            return <Product item={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Products;
