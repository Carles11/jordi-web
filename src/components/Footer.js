import React from "react";

import FooterTabs from "./FooterTabs.js";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_item">Aviso legal</div>
      <div className="footer_item">Protección de datos</div>
      <div className="footer_item">Social Media</div>
      <FooterTabs />
    </div>
  );
};

export default Footer;
