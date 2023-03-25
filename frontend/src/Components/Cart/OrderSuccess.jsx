import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { EMPTY_CART_INFO } from "../../constants/cartConstants";

const OrderSuccess = () => {

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch({
  //     type: EMPTY_CART_INFO
  //   })
  // })
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
