import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="d-flex justify-content-around list-unstyled py-4 fw-bold fs-4 bg-dark mb-0">
        <li>
          <Link to="/" className="text-light text-decoration-none">
            Home
          </Link>
        </li>

        <li>
          <Link to="/shop" className="text-light text-decoration-none">
            Shop
          </Link>
        </li>

        <li>
          <Link to="/counter" className="text-light text-decoration-none">
            Counter
          </Link>
        </li>

        <li>
          <Link to="/todo" className="text-light text-decoration-none">
            To-Do
          </Link>
        </li>

        <li>
          <Link to="/register" className="text-light text-decoration-none">
            Register
          </Link>
        </li>

        <li>
          <Link to="/login" className="text-light text-decoration-none">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
