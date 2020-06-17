import React from "react";
import { Link } from "react-router-dom";

import { NavigationMenu } from "../../configs/NavigationMenu";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <ul className="header">
      {NavigationMenu.map((tab) => {
        return (
          <li className="header header_item" key={tab.key}>
            <Link to={tab.link}>{tab.name.toUpperCase()}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
