import React from "react";
import { Link } from "react-router-dom";

import { NavigationMenu } from "../../configs/NavigationMenu";
import "./Navigation.scss";
import logoJordi from "../../assets/logos/JordiLogo_200.png";

const Navigation = () => {
  return (
    <div className="header">
      <img src={logoJordi} alt="logo Jordi Arjó Terápias Psicólogo" />
      <ul className="header_nav">
        {NavigationMenu.map((tab) => {
          return (
            <li className="header header_item" key={tab.key}>
              <Link to={tab.link}>{tab.name.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
