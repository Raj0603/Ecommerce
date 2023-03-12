/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, } from "@fortawesome/fontawesome-free-solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar =({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <>
      <div className="navbar-main">
        <div className="left-nav">
          <Link to="/">
          <img src={Logo} alt="" className="nav-logo" />
          </Link>
        </div>
        <div className="center-nav">
          <a className="nav-a-list" href="">
            Mens
            <ul className="dropdown">
              <li className="dropdown-li">Topwear</li>
              <li className="dropdown-li">Bottomwear</li>
              <li className="dropdown-li">Footwear</li>
              <li className="dropdown-li">Accessories</li>
            </ul>
          </a>
          <Link to="/products" className="nav-a-list">
            Products
          </Link>
          <a className="nav-a-list" href="">
            Kids
          </a>
          <a className="nav-a-list" href="">
            Sales
          </a>
        </div>
        <div className="right-nav">
          <ul className="right-search">
            <li className="search-list">
              {/* <form onSubmit={searchSubmitHandler}>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form> */}
              <input
                type="text"
                name="search"
                id="nav-search"
                placeholder="search"
                // value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onSubmit={searchSubmitHandler}
              />
            </li>
            <li className="search-list icon-nav">
              <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />
            </li>
            <li className="search-list icon-nav">
              <Link to="/login">
              <FontAwesomeIcon icon={faUser} className="fa-lg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
