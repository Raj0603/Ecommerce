import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/fontawesome-free-solid";

function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="left-nav">
          <img src={Logo} alt="" className="nav-logo" />
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
          <a className="nav-a-list" href="">
            Womens
          </a>
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
              <input type="text" name="" id="nav-search" placeholder="search" />
            </li>
            <li className="search-list icon-nav">
              <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />
            </li>
            <li className="search-list icon-nav">
              <FontAwesomeIcon icon={faUser} className="fa-lg" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
