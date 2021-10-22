import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./shop-style.css";
import { Spinner } from "react-bootstrap";

const Shop = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <>
      {products.length ? (
        <div className="row justify-content-center flex-wrap w-100 p-5 mx-0 bg-light">
          {products.map((product) => {
            return (
              <Link
                to={`/shop/${product.id}`}
                key={product.id}
                className="card border-3 text-center text-decoration-none p-3 mb-5 me-5 w-25"
              >
                <img
                  className="card-img-top my-5 mx-auto"
                  src={product.image}
                  alt="product"
                />

                <div className="card-body text-dark">
                  <h4 className="mb-3 fw-bold">{product.title}</h4>
                  <p className="mb-3 fs-4 fw-bold">
                    Price:{" "}
                    <span className="text-danger">{product.price} EGP</span>
                  </p>
                  <div className="d-flex align-items-start justify-content-center">
                    <p className="fs-4 fw-bold me-3">Rating:</p>
                    <ReactStars
                      count={5}
                      size={26}
                      isHalf={true}
                      edit={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      value={product.rating.rate}
                      activeColor="#FA8072"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <Spinner
          animation="border mx-auto d-flex mt-5"
          variant="dark"
          role="status"
        >
          <span className="visually-hidden"> LOFDSdaj</span>
        </Spinner>
      )}
    </>
  );
};

export default Shop;
