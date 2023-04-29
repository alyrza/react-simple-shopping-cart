import React, { Component } from "react";
import "./Header.css";
import { IoMdCart } from "react-icons/io";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">فروشگاه من</div>
          <nav>
            <ul>
              <li>
                <a href="">درباره ما</a>
              </li>
              <li>
                <a href="">تماس با ما</a>
              </li>
              <li>
                <a href="">محصولات</a>
              </li>
              <li>
                <a href="">خانه</a>
              </li>
              <li>
                <a className="cart">
                    <span className="badge">3</span>
                  <IoMdCart />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
