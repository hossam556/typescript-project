import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import Home from "../pages/home";

interface IProps {
  component: React.FC;
}

const PublicRoutes: React.FC<IProps> = ({ component: Component }) => {
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );

  if (isAuthenticated) return <Navigate to="/home" />;

  return <Component />;
};

export default PublicRoutes;
