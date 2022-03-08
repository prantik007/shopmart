import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState(productData);
  const [isLoading, setIsLoading] = useState(false);

  let componentMounted = useRef(false);

  //Fetch products
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setProductData(await response.clone().json());
        setFilter(await response.json());
        setIsLoading(false);
        await console.log(filter);
      }
      return () => {
        componentMounted.current = false;
      };
    };

    getProducts();
  }, []);
  //Show all Products
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center pb-5">
          <btn
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(productData)}
          >
            All
          </btn>
          <btn
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </btn>
          <btn
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </btn>
          <btn
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jewellery
          </btn>
          <btn
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </btn>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div key={product.id} className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text fw-bold">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary mt-auto">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  //Loading
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  //function to filter products based on selection
  const filterProducts = (selectedCategory) => {
    const updatedList = productData.filter(
      (item) => item.category === selectedCategory
    );
    setFilter(updatedList);
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">New Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
