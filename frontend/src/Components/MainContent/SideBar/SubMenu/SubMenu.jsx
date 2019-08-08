import React from "react";
import "./SubMenu.css";

const SubMenu = props => {
  return props.subCategories.children.map((item, index) => {
    return (
      <li key={index} className="subCategories-item">
        {item}
      </li>
    );
  });
};

export default SubMenu;
