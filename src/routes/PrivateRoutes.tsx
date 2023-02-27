import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import Login from "../pages/login";

interface IProps {
  component: React.FC;
}

const PrivateRoutes: React.FC<IProps> = ({ component: Component }) => {
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <Component />;
};

export default PrivateRoutes;
