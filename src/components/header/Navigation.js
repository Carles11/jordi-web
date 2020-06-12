import React from "react";
import { Link } from "react-router-dom";

import { NavigationMenu } from "../../configs/NavigationMenu";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="header">
      <ul>
        {NavigationMenu.map((tab) => {
          return (
            <li key={tab.key}>
              <Link className="header_item_navigation" to={tab.link}>
                {tab.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
