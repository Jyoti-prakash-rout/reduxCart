import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="logo">REDUX STORE</span>
        <div>
          <Link className="navLink" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="navLink" to="/cart">
            {" "}
            Cart{" "}
          </Link>
          <span className="">Cart items: 0</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
