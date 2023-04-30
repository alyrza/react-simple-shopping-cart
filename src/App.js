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
  render() {
    return (
      <>
        <Header cartItems={this.state.cartItems} />
        <Main addToCart={this.addToCart} />
      </>
    );
  }
}

