import React from "react";

import hero_bg from "../assets/images/hero-bg.jpg";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-success">
        <img src={hero_bg} className="card-img" alt="hero-bg" height="700px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title display-3 fw-bolder">
            Shop for the latest stuff on Shopmart
          </h5>
          <p className="card-text lead fs-2">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default Home;
