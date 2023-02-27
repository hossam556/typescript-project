import { lazy } from "react";
import IRoutes from "./types";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));

export const routes: IRoutes = {
  login: {
    path: "login",
    component: Login,
    public: true,
  },
  home: {
    path: "login",
    component: Home,
  },
};
