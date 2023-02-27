import React, { Suspense } from "react";
import Login from "./pages/login";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./store/store";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import Home from "./pages/home";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { routes } from "./routes";
import { useTranslation } from "react-i18next";

function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else if (i18n.language === "ar") {
      i18n.changeLanguage("en");
    }
  };

  document.body.dir = i18n.dir();

  return (
    <Suspense fallback="loading.....">
      <Routes>
        <Route
          element={
            isAuthenticated ? (
              <PrivateLayout changeLanguageHandler={changeLanguageHandler} />
            ) : (
              <PublicLayout
                type="private"
                changeLanguageHandler={changeLanguageHandler}
              />
            )
          }
        >
          {/* {Object.values(routes).map((item, i) => (
            <Route
              key={i}
              path={item.path}
              element={
                item?.public ? (
                  <PublicRoutes component={item.component} />
                ) : (
                  <PrivateRoutes component={item.component} />
                )
              }
            />
          ))} */}

          <Route path="/home" element={<PrivateRoutes component={Home} />} />
          <Route path="/login" element={<PublicRoutes component={Login} />} />
        </Route>
        <Route
          path="*"
          element={
            <Navigate replace to={isAuthenticated ? "/home" : "/login"} />
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
