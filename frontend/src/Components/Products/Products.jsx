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


const categories = [
    "Laptop",
    "Phone"
]

const Products = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("")
    const [ratings, setRating] = useState(0)

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  
  let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }

    dispatch(getProduct(currentPage, price, category, ratings));
  }, [dispatch, currentPage, error, price, alert, category, ratings]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
            //   aria-labelledby="continuous-slider"
              min={0}
              max={25000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
                {categories.map((category) => (
                    <li key={category} className="category-link" onClick={()=>setCategory(category)}>

                        {category}
                    </li>
                  ))}
            </ul>

            <fieldset>
                <Typography component="legend">
                    Ratings Above

                </Typography>
                <Slider
              value={ratings}
              onChange={(e, newRating)=>{
                setRating(newRating);
              }}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              min={0}
              max={5}
            />
            </fieldset>
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
