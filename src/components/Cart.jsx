import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "./redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.cartHandler);
  const stateArray = [...state];
  console.log(state);
  const dispatch = useDispatch();

  const handlePlusButton = (product) => {
    dispatch(addToCart(product));
  };

  const handleMinusButton = (product) => {
    dispatch(deleteFromCart(product));
  };
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.qty} X ${cartItem.price} = $
                {cartItem.qty * cartItem.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleMinusButton(cartItem)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handlePlusButton(cartItem)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    }

    function checkOut() {
      return (
        <div className="container">
          <div className="row">
            <Link
              to="/checkout"
              className="btn btn-outline-primary mb-5 w-25 mx-auto"
            >
              Proceed To checkout
            </Link>
          </div>
        </div>
      );
    }
  

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {state.length === 0 ? emptyCart() : state.map(cartItems)}
      {checkOut()}
    </div>
  );
};

export default Cart;
