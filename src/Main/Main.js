import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <main>
        <section>
          <h2 class="title">محصولات</h2>
          <div class="products">
            <div class="product">
              <img src="1.webp" alt="" />
              <h3 class="product-title">کفش راحتی</h3>
              <h3 class="product-price">قیمت : 25000 تومان</h3>
              <button class="product-btn">افزاودن به سبد خرید</button>
            </div>
            <div class="product">
              <img src="2.webp" alt="" />
              <h3 class="product-title">کفش راحتی</h3>
              <h3 class="product-price">قیمت : 25000 تومان</h3>
              <button class="product-btn">افزاودن به سبد خرید</button>
            </div>
            <div class="product">
              <img src="3.webp" alt="" />
              <h3 class="product-title">کفش راحتی</h3>
              <h3 class="product-price">قیمت : 25000 تومان</h3>
              <button class="product-btn">افزاودن به سبد خرید</button>
            </div>
            <div class="product">
              <img src="4.webp" alt="" />
              <h3 class="product-title">کفش راحتی</h3>
              <h3 class="product-price">قیمت : 25000 تومان</h3>
              <button class="product-btn">افزاودن به سبد خرید</button>
            </div>
            <div class="product">
              <img src="5.webp" alt="" />
              <h3 class="product-title">کفش راحتی</h3>
              <h3 class="product-price">قیمت : 25000 تومان</h3>
              <button class="product-btn">افزاودن به سبد خرید</button>
            </div>
            <div class="product">
              <img src="6.webp" alt="" />
              <h3 class="product-title">کفش راحتی</h3>
              <h3 class="product-price">قیمت : 25000 تومان</h3>
              <button class="product-btn">افزاودن به سبد خرید</button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
