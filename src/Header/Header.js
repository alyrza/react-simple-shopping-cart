import React, { Component } from "react";
import "./Header.css";
import { IoMdCart } from "react-icons/io";
import Cart from "./Cart/Cart";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cartIsOpen: "",
    };

    this.toggleCart = this.toggleCart.bind(this);
  }
  toggleCart() {
    if (this.state.cartIsOpen) {
      return this.setState({ cartIsOpen: "" });
    }
    this.setState({ cartIsOpen: "active" });
  }
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="logo">فروشگاه من</div>
            <nav>
              <ul>
                <li>
                  <a href="#">درباره ما</a>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
                <li>
                  <a href="#">محصولات</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#" onClick={this.toggleCart} className="cart-btn">
                    <span className="badge">3</span>
                    <IoMdCart />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Cart
          isOpen={this.state.cartIsOpen}
          toggle={this.toggleCart}
          cartItems={this.props.cartItems}
        />
      </>
    );
  }
}

export default Header;
