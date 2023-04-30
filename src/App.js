import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
  }

  addToCart(item) {
    this.setState((prevState) => {
      let status = prevState.cartItems.some((cartItem) => {
        return cartItem.id === item.id;
      });

      if (!status) {
        return { cartItems: [...prevState.cartItems, item] };
      }
    });
  }

  removeCartItem(itemId) {
    this.setState((prevState) => {
      let newCartItems = prevState.cartItems.filter((cartItem) => {
        return cartItem.id !== itemId;
      });
      return { cartItems: newCartItems };
    });
  }
  render() {
    return (
      <>
        <Header
          cartItems={this.state.cartItems}
          removeCartItem={this.removeCartItem}
        />
        <Main addToCart={this.addToCart} />
      </>
    );
  }
}
