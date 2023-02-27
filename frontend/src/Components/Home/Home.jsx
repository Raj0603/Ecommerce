import "./Home.css"
import Product from "../Product/Product"
import { Fragment } from "react";
import Metadata from "../Metadata";

const product = {
    name:"Blue Tshirt",
    images:[{url:"https://contents.mediadecathlon.com/p2014174/495fbfd5eabbd253be4ab8323e098e5a/p2014174.jpg?format=auto&quality=70&f=650x0"}],
    price:3000,
    _id:"Abhishek"
};

const Home = ()=>{


    return(
        <>
        <Metadata title="ECOMMERCE" />
        <div className="home-main">

            <div className="productContainer">
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>

                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
            </div>
        </div>
        </>
    )
}
export default Home