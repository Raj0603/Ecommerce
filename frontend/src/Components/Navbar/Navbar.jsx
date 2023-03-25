/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/fontawesome-free-solid";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";
import { EMPTY_CART_INFO } from "../../constants/cartConstants";

const Navbar = ({ user, isAuthenticated }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);

    if (user.role === "admin") {
      setIsAdmin(!isAdmin);
    }
  };

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
    dispatch({
      type: EMPTY_CART_INFO,
    });
  }
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
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
          <Link to="/products" className="nav-a-list link">
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
              <form onSubmit={searchSubmitHandler}>
                {/* <FontAwesomeIcon icon={faSearch} className="fa-lg" /> */}
                <input
                  id="nav-search"
                  type="text"
                  placeholder="Search Products"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                {/* <input type="submit" value="Search" /> */}
              </form>
            </li>
            <li className="search-list icon-nav">
              <Link className="link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />
              </Link>
            </li>
            <li className="search-list icon-nav p-img">
              <span onClick={handleDropdownToggle}>
                <img
                  src={"/Profile.png"}
                  alt="/Profile.png"
                  className="profile-img"
                />
              </span>
              <ul
                className={
                  isDropdownOpen ? "navbar-dropdown active" : "navbar-dropdown"
                }
              >
                {isAuthenticated ? (
                  <>
                    <li
                      className={
                        isAdmin
                          ? "navbar-dropdown-item"
                          : "navbar-dropdown-item2"
                      }
                    >
                      <Link
                        to="/admin/dashboard"
                        className="navbar-dropdown-link"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="navbar-dropdown-item">
                      <Link to="/account" className="navbar-dropdown-link">
                        My Profile
                      </Link>
                    </li>
                    <li className="navbar-dropdown-item">
                      <Link to="/orders" className="navbar-dropdown-link">
                        My Orders
                      </Link>
                    </li>
                    <li className="navbar-dropdown-item">
                      <Link to="/settings" className="navbar-dropdown-link">
                        Settings
                      </Link>
                    </li>
                    <li className="navbar-dropdown-item" onClick={logoutUser}>
                      <Link to="/logout" className="navbar-dropdown-link">
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="navbar-dropdown-item">
                      <Link to="/login" className="navbar-dropdown-link">
                        Login
                      </Link>
                    </li>
                    <li className="navbar-dropdown-item">
                      <Link to="/login" className="navbar-dropdown-link">
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
