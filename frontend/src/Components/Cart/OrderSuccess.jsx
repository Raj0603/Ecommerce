import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { emptyCartItems } from "../../actions/cartActions";
import { useDispatch } from "react-redux";
import Metadata from "../Metadata"

const OrderSuccess = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(emptyCartItems())
  },[]);
  
  return (
    <>
    <Metadata title="Order Successful"/>
     <span className="eci">

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
