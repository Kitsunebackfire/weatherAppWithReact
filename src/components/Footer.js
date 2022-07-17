import React from "react";
import "./styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer__mainContainer">
      <div className="footer__designedBy">Designed By K. Ivey</div>
      <nav className="footer__nav">
        <a className="footer__navLink">github</a>
        <a className="footer__navLink">Portfolio</a>
        <a className="footer__navLink" href="mailto:kurtIveyCodes@gmail.com">
          Contact
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
