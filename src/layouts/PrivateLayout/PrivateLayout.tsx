import React from "react";
import "./PrivateLayout.scss";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProps {
  changeLanguageHandler: () => any;
}

const PrivateLayout: React.FC<IProps> = ({ changeLanguageHandler }) => {
  const { t } = useTranslation();

  return (
    <div className="privateLayout-wrapper">
      <header>{t("dashboardApp")}</header>
      <button onClick={changeLanguageHandler}> switch language</button>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
