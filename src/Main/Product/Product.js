import React, { Component } from "react";
import "./Product.css"

class Product extends Component {
  render() {
    return (
      <div className="product">
        <img src={this.props.image} alt="" />
        <h3 className="product-title">{this.props.title}</h3>
        <h3 className="product-price">قیمت : {this.props.price} تومان</h3>
        <button className="product-btn">افزودن به سبد خرید</button>
      </div>
    );
  }
}

export default Product;
