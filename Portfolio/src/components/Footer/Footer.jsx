import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        &copy; {currentDate} Made by Laura Januleviciute
      </div>
    </footer>
  );
};

export default Footer;
