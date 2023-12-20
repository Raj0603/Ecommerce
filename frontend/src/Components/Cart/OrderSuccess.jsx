import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { EMPTY_CART_INFO } from "../../constants/cartConstants";
import { Link } from "react-router-dom";

const OrderSuccess = () => {

  

  return (
    <>
     <span className="eci">
     {EMPTY_CART_INFO}

      </span>
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      
      <Link to="/orders">View Orders</Link>
    </div>
    </>
  );
};

export default OrderSuccess;
