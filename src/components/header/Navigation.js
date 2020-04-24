import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <li className="footer_items_navigation">
          <Link to="/">Home</Link>
        </li>
        <li className="footer_items_navigation">
          <Link to="/about">Sobre mi</Link>
        </li>
        <li className="footer_items_navigation">
          <Link to="/projects">Projectes</Link>
        </li>
        <li className="footer_items_navigation">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default Navigation;
