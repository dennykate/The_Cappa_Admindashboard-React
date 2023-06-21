import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router";

const AuthGuard = ({ children }) => {
  const isLogin = Cookies.get("isLogin");

  if (isLogin) return <Navigate to={"/"} />;
  else return children;
};

export default AuthGuard;
