import React, {  Fragment } from "react";
import { useSelector } from "react-redux";
import {  Outlet,  } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
    {loading ? (<></>) : <> {isAuthenticated ? (<Outlet/>) : <></>}</>}
    
    </>
  );
};

export default ProtectedRoute;
