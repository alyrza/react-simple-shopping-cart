import React, { Component } from "react";
import "./Cart.css";
import { AiOutlineClose } from "react-icons/ai";
import Item from "./Item/Item";

class Cart extends Component {
  constructor() {
    super();
    this.toggleCart = this.toggleCart.bind(this);
  }
  toggleCart() {
    this.props.toggle();
  }

  render() {
    return (
      <div className={`cart ${this.props.isOpen}`}>
        <span className="close-btn" onClick={this.toggleCart}>
          <AiOutlineClose />
        </span>
        <h3>سبد خرید</h3>
        <table>
          <thead>
            {this.props.cartItems.map((cartItem) => {
              return <Item key={cartItem.id} {...cartItem} onRemove={this.props.onRemoveItem} />;
            })}
          </thead>
        </table>
        <button>
          حذف کل سبد خرید
        </button>
      </div>
    );
  }
}

export default Cart;
