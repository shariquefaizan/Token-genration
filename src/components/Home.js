import React, { useEffect, useState } from "react";
import Books from "../components/Images/book.jpeg";
import { addToCart } from "../service/actions/actions";
import axios from "axios";

export default function Home(props) {
  console.warn("props", props);
  localStorage.setItem("token", JSON.stringify("MyToken"));

  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("token"));
    if (items) {
      setItems(items);
    }
    const mydata = async (e) => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      console.log(data.data);
    };
    mydata();
  }, []);

  if (items == "MyToken") {
    console.log("Matched");
  } else {
    console.log("Sorry fail to match tocken");
  }

  return (
    <div className="mainclass">
      <div className="main">
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Math </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price: $ 35.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Physics </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price: $ 85.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Chemistry </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price: $ 65.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Biology </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price: $ 43.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Math </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price: $ 26.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Physics </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price: $ 93.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Chemistry </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price: $ 78.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="cart-wraper">
          <div className="img-wraper item">
            <img src={Books} alt="book" />
          </div>

          <div className="text-wraper item">
            <span>
              {" "}
              <h4> Biology </h4>{" "}
            </span>{" "}
            <span>
              {" "}
              <h4> Price : $ 81.00 </h4>
            </span>
          </div>

          <div className="btn-wraper item">
            <button
              className="buttons"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: " books" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
