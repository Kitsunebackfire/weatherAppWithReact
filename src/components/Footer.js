import React from "react";
import "./styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer__mainContainer">
      <div className="footer__designedBy">
        Designed By <span className="footer__designer">K. Ivey</span>
      </div>
      <nav className="footer__nav">
        <div className="footer__navLinkContainer">
          <a
            className="footer__navLink"
            href="https://github.com/Kitsunebackfire/weatherAppWithReact"
          >
            Github
          </a>
        </div>
        <div className="footer__navLinkContainer">
          <a className="footer__navLink" href="#">
            Portfolio
          </a>
        </div>

        <div className="footer__navLinkContainer">
          <a className="footer__navLink" href="mailto:kurtIveyCodes@gmail.com">
            Contact
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
