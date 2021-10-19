import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="d-flex justify-content-around list-unstyled my-5 fw-bold fs-4">
        <li className="mx-2">
          <Link to="/">Home</Link>
        </li>

        <li className="mx-2">
          <Link to="/shop">Shop</Link>
        </li>

        <li className="mx-2">
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
