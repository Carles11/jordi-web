import React from "react";
import { Link } from "react-router-dom";

import { NavigationMenu } from "../../configs/NavigationMenu";
import "./Navigation.scss";
import "../../index.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          {NavigationMenu.map((tab) => {
            return (
              <li className="nav-item" key={tab.key}>
                <Link className="nav-link" to={tab.link}>
                  <img
                    src={require(`../../assets/icons/png/${tab.icon}`)}
                    alt={tab.alt}
                    width={`${tab.name === "Home" ? "120%" : "75%"}`}
                  />
                  <span className="link-text">{tab.name.toUpperCase()}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
