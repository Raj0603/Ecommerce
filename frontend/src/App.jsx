import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import Products from "./Components/Products/Products";
import Registration from "./Components/Registration/Registration";
// import Product from './Components/Product/Product'

const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/login" element={<Registration />} />
      </Routes>
        <Footer />
    </Router>
  );
  // <Product/>
};

export default App;
