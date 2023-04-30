import React, { Component } from "react";
import "./Cart.css";
import { AiOutlineClose } from "react-icons/ai";
import Item from "./Item/Item";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <span className="close-btn">
          <AiOutlineClose />
        </span>
        <h3>سبد خرید</h3>
        <table>
          <thead>
            <Item />
          </thead>
        </table>
        <button>حذف کل سبد خرید</button>
      </div>
    );
  }
}

export default Cart;
