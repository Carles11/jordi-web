import React from "react";
import { Link } from "react-router-dom";

import { NavigationMenu } from "../configs/NavigationMenu";

const FooterTabs = () => {
  return (
    <>
      <ul className="footer_item">
        {NavigationMenu.map((item) => {
          return (
            <li key={item.key}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <hr />
    </>
  );
};

export default FooterTabs;
