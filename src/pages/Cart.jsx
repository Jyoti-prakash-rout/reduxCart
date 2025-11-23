import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleReomve = (id) => {
    dispatch(remove(id));
  };

  if (products.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="font-bold">Your 🛒 is empty</p>
        <div>
          {" "}
          <Link to="/">Back to Home 🔙</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
          {products.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt={product.title} />
              <h5> {product.title} </h5>
              <h5> ₹{product.price} </h5>
              <button onClick={() => handleReomve(product.id)} className="btn">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
