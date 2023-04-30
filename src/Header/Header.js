import React, { Component } from "react";
import "./Header.css";
import { IoMdCart } from "react-icons/io";
import Cart from "./Cart/Cart";

class Header extends Component {
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
                  <a href="#" className="cart-btn">
                    <span className="badge">3</span>
                    <IoMdCart />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Cart />
      </>
    );
  }
}

export default Header;
