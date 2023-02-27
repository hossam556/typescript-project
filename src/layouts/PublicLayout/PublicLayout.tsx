import React from "react";
import "./PublicLayout.scss";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProps {
  type: string;
  changeLanguageHandler: () => any;
}

const PublicLayout: React.FC<IProps> = ({ type, changeLanguageHandler }) => {
  const { t } = useTranslation();

  return (
    <div className="container publicLayout-wrapper">
      <div className="login_left-content">
        <p>{type}</p>
        <h1>
          Welcome to <b>{t("hossamWebsite")}</b> website
        </h1>
        <button onClick={changeLanguageHandler}> switch language</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
