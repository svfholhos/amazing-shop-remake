import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  render() {
    return (
      <>
        <span id="showFilters">
          <h4>Filters</h4>
        </span>
        <div className="filters">
          <span className="brand-filter">
            Brand: <span className="filter-blue">All brands</span>
          </span>
          <span className="skin-filter">
            Skin type: <span className="filter-blue">For oily skin</span>
          </span>
          <span className="age-filter">
            Age: <span className="filter-blue">30+</span>
          </span>
          <span className="sort-by">
            Sort:
            <span className="filter-blue">
              By
              <br />
              Popularity
            </span>
          </span>
        </div>
      </>
    );
  }
}

export default Filter;
