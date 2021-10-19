import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Spinner } from "react-bootstrap";

const Product = ({ match }) => {
  useEffect(() => {
    getProductDetails();
  }, []);

  const [product, setProduct] = useState(null);

  const getProductDetails = () => {
    return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  return (
    <div>
      {product ? (
        <div className="d-flex border border-3 w-75 pt-5 mb-5 mx-auto">
          <img
            className="mb-3 ms-5"
            src={product.image}
            alt="product img"
          ></img>
          <div className="text-decoration-none mb-3 mx-auto w-50">
            <h2 className="mb-5 fw-bold">{product.title}</h2>
            <p className="mb-5">{product.description}</p>
            <p className="mb-3 fs-4 fw-bold">
              Price: <span className="text-danger"> {product.price} EGP</span>
            </p>

            <div className="d-flex align-items-start mb-3">
              <p className="fs-4 fw-bold me-1">Rating:</p>
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
        </div>
      ) : (
        <Spinner
          animation="border mx-auto d-flex"
          variant="light"
          role="status"
        >
          <span className="visually-hidden"></span>
        </Spinner>
      )}
    </div>
  );
};

export default Product;
