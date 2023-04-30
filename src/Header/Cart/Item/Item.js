import React, { Component } from "react";
import "./Item.css"

class Item extends Component {
  render() {
    return (
      <tr>
        <td>
          <img className="cart-item-image" src="product-images/1.webp" alt="" />
        </td>
        <td>عنوان</td>
        <td>قیمت</td>
        <td>
          <button>حذف</button>
        </td>
      </tr>
    );
  }
}

export default Item;
