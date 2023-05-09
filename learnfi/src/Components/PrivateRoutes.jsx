import React from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Login from "../Components/Login";
export default function PrivateRoutes({ children }) {
  const { IsAuth } = useContext(AuthContext);

  if (!IsAuth) {
    return <Navigate to="/login"/>
    // return <Login />;
  }
  return children;
}
