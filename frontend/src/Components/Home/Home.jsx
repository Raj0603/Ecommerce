
/* eslint-disable no-unused-vars */

import "./Home.css";
import Product from "../ProductCard/ProductCard";
import { useEffect } from "react";
import Metadata from "../Metadata";
import { clearErrors, getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loader/Loading";
import {useAlert} from "react-alert"

const Home = () => {

  const alert=useAlert()
  const dispatch = useDispatch();
  const {loading,error,products} = useSelector(state=>state.products);

  useEffect(() => {

    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
    
    {loading ? <Loading/> : 
    <>
      <Metadata title="ECOMMERCE" />
      <div className="home-main">
        <div className="productContainer">
          {products && products.map(product => <Product product={product} />)}
          
        </div>
      </div>
    </>
    
    }
    
    </>
  );
};
export default Home;
