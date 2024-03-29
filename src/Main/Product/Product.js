import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    let { id, title, price, image } = this.props;
    this.props.addTocart({
      id,
      title,
      price,
      image,
    });
  }
  render() {
    return (
      <div className="product">
        <img src={this.props.image} alt="" />
        <h3 className="product-title">{this.props.title}</h3>
        <h3 className="product-price">قیمت : {this.props.price} تومان</h3>
        <button className="product-btn" onClick={this.addToCart}>
          افزودن به سبد خرید
        </button>
      </div>
    );
  }
}

export default Product;
