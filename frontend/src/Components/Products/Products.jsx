import React, { useEffect, useState } from "react";
import { clearErrors, getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loader/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Metadata from "../Metadata"

const categories = ["Laptop", "Phone"];

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRating] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(25000);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for mobile filter toggle

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keywords = keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = () => {
    setPrice([minPrice, maxPrice]);
    setCurrentPage(1);
    setIsFilterOpen(!isFilterOpen);
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(25000);
    setRating(0);
    setCategory("");
    setCurrentPage(1);
    dispatch(getProduct(keywords, 1, [0, 25000], "", 0));
    setIsFilterOpen(!isFilterOpen);
  };

  let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keywords, currentPage, price, category, ratings));
  }, [dispatch, currentPage, error, keywords, price, alert, category, ratings]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
        <Metadata title="Products"/>
        <div className="mobileToggleBar" onClick={toggleFilter}>
            <span>{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
          </div>
          <div
            className={`mobileFilter ${
              isFilterOpen ? "showFilters" : "hideFilters"
            }`}
          >
            <div className="mobilefb" id="fb-main">
            <span className="typ">Price</span>
            <div className="price-input-boxes">
              <input
                type="number"
                placeholder="Min"
                onChange={(e) => setMinPrice(e.target.value)}
                className="prp-ip"
              />
              <input
                type="number"
                placeholder="Max"
                onChange={(e) => setMaxPrice(e.target.value)}
                className="prp-ip"
              />

              <button className="prp-but" onClick={priceHandler}>
                Search
              </button>
            </div>

            <span className="typ">Categories</span>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  key={category}
                  className="category-link"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <span component="legend" className="typ">
              Ratings Above
            </span>
            <Slider
              value={ratings}
              onChange={(e, newRating) => {
                setRating(newRating);
              }}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              valueLabelStep={0.1}
              min={0}
              max={5}
            />
            {/* </fieldset> */}

            <button className="prp-but" onClick={resetFilters}>
              Reset
            </button>
          </div>
          </div>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {/* Mobile Toggle Bar */}
          

          <div className="filterBox" id="fb-main">
            <span className="typ">Price</span>
            <div className="price-input-boxes">
              <input
                type="number"
                placeholder="Min"
                onChange={(e) => setMinPrice(e.target.value)}
                className="prp-ip"
              />
              <input
                type="number"
                placeholder="Max"
                onChange={(e) => setMaxPrice(e.target.value)}
                className="prp-ip"
              />

              <button className="prp-but" onClick={priceHandler}>
                Search
              </button>
            </div>

            <span className="typ">Categories</span>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  key={category}
                  className="category-link"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <span component="legend" className="typ">
              Ratings Above
            </span>
            <Slider
              value={ratings}
              onChange={(e, newRating) => {
                setRating(newRating);
              }}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              valueLabelStep={0.1}
              min={0}
              max={5}
            />
            {/* </fieldset> */}

            <button className="prp-but" onClick={resetFilters}>
              Reset
            </button>
          </div>

          {resultPerPage < count && (
            <div className="pagination">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
