import React, { Component } from "react";
import "./Main.css";
import Product from "./Product/Product";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: "ساعت چرمی",
          price: "51000",
          image: "product-images/1.webp",
        },
        {
          id: 2,
          title: "خردکن سریع",
          price: "25000",
          image: "product-images/2.webp",
        },
        {
          id: 3,
          title: "محافظ ولتاژ",
          price: "86300",
          image: "product-images/3.webp",
        },
        {
          id: 4,
          title: "تونیک زنانه",
          price: "12600",
          image: "product-images/4.webp",
        },
        {
          id: 5,
          title: "کتاب های خوب",
          price: "33200",
          image: "product-images/5.webp",
        },
        {
          id: 6,
          title: "کیف مدرسه",
          price: "14600",
          image: "product-images/6.webp",
        },
        {
          id: 7,
          title: "مایع دستشویی",
          price: "87100",
          image: "product-images/7.webp",
        },
        {
          id: 8,
          title: "شلوار زیبا",
          price: "63000",
          image: "product-images/8.webp",
        },
        {
          id: 9,
          title: "کتاب زندگی خود",
          price: "12000",
          image: "product-images/9.webp",
        },
        {
          id: 10,
          title: "جعبه ابزار",
          price: "13000",
          image: "product-images/10.webp",
        },
      ],
    };
  }
  render() {
    return (
      <main>
        <section>
          <h2 className="title">محصولات</h2>
          <div className="products">
            {this.state.products.map((product) => {
              return <Product {...product} key={product.id} addTocart = {this.props.addToCart} />;
            })}
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
