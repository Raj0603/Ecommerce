/* eslint-disable import/prefer-default-export */

import React from "react";
// import "./Product.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";



const productCard = ({ product }) => {

  const options = {
    edit:false,
    color: "rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size: window.innerWidth < 600? 20:25,
    value: product.ratings,
    isHalf:true
}

  return (
    <>
      <Link className="productCard" to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt="" className="pc-im"/>
        <p className="pc-pn">{product.name}</p>
        <div className="pc-pr">
          <ReactStars {...options}/>
            {/* <span>({product.numofReviews} Reviews)</span> */}
          
        </div>
        <span className="pc-pp">{`₹${product.price}`}</span>
      </Link>
    </>
  );
};
export default productCard;

/* eslint-enable import/prefer-default-export */