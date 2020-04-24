import React from "react";
import { Link } from "react-router-dom";

const FooterTabs = () => {
  return (
    <>
      <ul className="footer_item">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre mi</Link>
        </li>
        <li>
          <Link to="/projects">Projectes</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default FooterTabs;
