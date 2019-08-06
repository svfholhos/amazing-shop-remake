import React from "react";
import "./MyCartButton.css";

const MyCartButton = () => {
  return (
    <button className="myCart">
      <i className="fas fa-cart-plus cart-icon" />
      <div className="myCart-text">My Cart</div>
      <div className="count"> 12 </div>
    </button>
  );
};

export default MyCartButton;
