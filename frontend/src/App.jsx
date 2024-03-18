import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Products from "./Components/Products/Products";
import Registration from "./Components/Registration/Registration";
import store from "./Store";
import React, { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";
import Profile from "./Components/Registration/Profile";
import { Navigate } from "react-router-dom";
import UpdateProfile from "./Components/Registration/UpdateProfile";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import ResetPassword from "./Components/Registration/ResetPassword";
import ForgotPassword from "./Components/Registration/ForgotPassword";
import UpdatePassword from "./Components/Registration/UpdatePassword";
import Cart from "./Components/Cart/Cart";
import Shipping from "./Components/Cart/Shipping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import ContactPage from "./Components/ContactPage/ContactPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import StripePayments from "./Components/Cart/StripePayments";
import OrderSuccess from "./Components/Cart/OrderSuccess";
import MyOrders from "./Components/Orders/MyOrders";
import OrderDetails from "./Components/Orders/OrderDetails";
import Dashboard from "./Components/Admin/Dashboard";
import ProductList from "./Components/Admin/ProductList";
import NewProduct from "./Components/Admin/NewProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import OrderList from "./Components/Admin/OrderList";
import ProcessOrder from "./Components/Admin/ProcessOrder";
import UsersList from "./Components/Admin/UsersList";
import UpdateUser from "./Components/Admin/UpdateUser";
import ProductReviews from "./Components/Admin/ProductReviews";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Navbar user={user} isAuthenticated={isAuthenticated} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/login" element={<Registration />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/logout" element={<Navigate to="/" />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />

        <Route element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route exact path="/success" element={<OrderSuccess />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order/:id" element={<OrderDetails />} />
          <Route
            isAdmin={true}
            exact
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/products"
            element={<ProductList />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/product"
            element={<NewProduct />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/product/:id"
            element={<UpdateProduct />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/orders"
            element={<OrderList />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/users"
            element={<UsersList />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/user/:id"
            element={<UpdateUser />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/reviews"
            element={<ProductReviews />}
          />

          <Route exact path="/process/payment" element={<StripePayments />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
  // <Product/>
};

export default App;
