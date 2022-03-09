import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import InvalidPage from "./components/InvalidPage";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/*" element={<InvalidPage />} />
      </Routes>
    </div>
  );
};

export default App;
