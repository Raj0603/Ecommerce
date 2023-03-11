import React, { useEffect } from "react";
import { clearErrors, getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loader/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css"

const Products = () =>{

    const dispatch = useDispatch();

    const {products, loading, error, productsCount} = useSelector(state => state.products)

    useEffect(() =>{
        dispatch(getProduct())
    }, [dispatch]) 
    return(
        <>
        {loading ? <Loading/> : <>
            <h2 className="productsHeading">
                Products
            </h2>

            <div className="products">
                {products && products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
        
        }</>
    )
}

export default Products