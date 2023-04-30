import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    return (
      <tr>
        <td>
          <img className="cart-item-image" src={this.props.image} alt="" />
        </td>
        <td>{this.props.title}</td>
        <td>{this.props.price}</td>
        <td>
          <button>حذف</button>
        </td>
      </tr>
    );
  }
}

export default Item;
