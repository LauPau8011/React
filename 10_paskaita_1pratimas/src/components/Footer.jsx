import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">Pagrindinis</Link>
          </li>
          <li className="menu-item">
            <Link to="/apiemus">Apie Mus</Link>
          </li>
          <li className="menu-item">
            <Link to="/naujienos">Naujienos</Link>
          </li>
          <li className="menu-item">
            <Link to="/paslaugos">Paslaugos</Link>
          </li>
          <li className="menu-item">
            <Link to="/atliktidarbai">Atlikti Darbai</Link>
          </li>
          <li className="menu-item">
            <Link to="/kontaktai">Kontaktai</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        &copy; {currentDate} Visos teisės saugomos
      </div>
    </footer>
  );
};

export default Footer;
