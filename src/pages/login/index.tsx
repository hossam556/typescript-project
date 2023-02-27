import React, { useState } from "react";
import "./login.scss";
import { handleShow } from "../../store/reducers/login/login";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../store/store";
import { authenticationHandler } from "../../store/reducers/login/login";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  // const [show , setShow] = useState(false);
  const show = useAppSelector((state) => state.login.show);
  const dispatch = useAppDispatch();

  return (
    <div className="login-wrapper">
      <button onClick={() => dispatch(authenticationHandler(true))}>
        Login Page
      </button>
    </div>
  );
};

export default Login;
