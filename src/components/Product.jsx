import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToCart } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

const dispatch=useDispatch();
const addProduct =(product)=>{
  dispatch(addToCart(product))
}

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

  //Loading
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>

        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={200} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="row">
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

          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>

          <p className="lead">{product.description}</p>

          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>{addProduct(product)}}>
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {isLoading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
