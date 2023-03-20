import "./ProductDetails.css";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productActions";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loading from "../Loader/Loading";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  
  const [quantity, setQuantity] = useState(1)
  
  const increaseQuantity = () =>{
    if(product.Stock <= quantity) return;
    
    const qty = quantity + 1;
    setQuantity(qty)
  }
  const decreaseQuantity = () =>{
    if(quantity > 1){
      const qty = quantity - 1;
      setQuantity(qty)}
    }

    const addToCartHandler = () =>{
      dispatch(addItemsToCart(id, quantity));
      alert.success("Item added to cart")
    }
    
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors())
      }
      dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert]);
    const options = {
      edit: false,
      color: "rgba(20,20,20,0.1)",
      activeColor: "tomato",
      size: window.innerWidth < 600 ? 20 : 25,
      value: product.ratings,
      isHalf: true,
    };
    
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="ProductDetails">
            <div>
              <Carousel className="carouselProduct">
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product.numofReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly value={quantity} type="number" />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button disabled={product.Stock < 1 ? true : false} onClick={addToCartHandler} >Add to Cart</button>
                </div>
              </div>
              <p>
                Status:
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                  {product.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
              <div className="detailsBlock-4">
                Description: <p>{product.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
