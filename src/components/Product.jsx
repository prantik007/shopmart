import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      console.log(product);
      setIsLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const ShowProduct = () => {
    return (
      <div>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
        </div>
        <div className="lead">
          Rating {product.rating}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{isLoading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
