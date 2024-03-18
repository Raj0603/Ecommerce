/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Navbar.css";
import Logo from "../../assets/logo2.png";
import { ShoppingCart, CircleUser } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";
import { EMPTY_CART_INFO } from "../../constants/cartConstants";

const Navbar = ({ isAuthenticated, user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/products">
                <li>Products</li>
              </Link>

              <a href="#">
                <li>About</li>
              </a>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <img src={Logo} alt="" className="nav-logo" />
          </Link>
        </div>
        <div className="center-nav">
          <Link to="/" className="nav-a-list link">
            Home
          </Link>
          <Link to="/products" className="nav-a-list link">
            Products
          </Link>
          <Link to="/contact" className="nav-a-list link">
            Contact Us
          </Link>
          <Link to="/about" className="nav-a-list link">
            About
          </Link>
        </div>
        <div className="right-nav">
          <ul className="right-search">
            <li className="search-list">
              <form onSubmit={searchSubmitHandler}>
                <input
                  id="nav-search"
                  type="text"
                  placeholder="Search Products"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </form>
            </li>
            <li className="search-list icon-nav" id="nav-sc">
              <Link className="link" to="/cart">
                <ShoppingCart size={32} color="#050505" />
              </Link>
            </li>
            <li className="search-list icon-nav p-img">
              <span onClick={handleDropdownToggle}>
                {isAuthenticated ? (
                  <img
                    src={user.avatar.url}
                    alt="Profile"
                    className="profile-img"
                  />
                ) : (
                  <img
                    src="/Profile.png"
                    alt="Profile"
                    className="profile-img"
                  />
                )}
                {/* <CircleUser color="#050505" className="profile-img" /> */}
                {/* <CircleUser size={32} color="#050505" /> */}
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
