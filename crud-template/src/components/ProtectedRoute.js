import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === true) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = (props) => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
