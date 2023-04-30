import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  remove(id) {
    this.props.onRemove(id)
  }
  render() {
    return (
      <tr>
        <td>
          <img className="cart-item-image" src={this.props.image} alt="" />
        </td>
        <td>{this.props.title}</td>
        <td>{this.props.price}</td>
        <td>
          <button onClick={this.remove.bind(this, this.props.id)}>حذف</button>
        </td>
      </tr>
    );
  }
}

export default Item;
