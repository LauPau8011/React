import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/madamlogo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="menu">
        <Link to="/">Pagrindinis</Link>
        <Link to="/apie-mus">Apie mus</Link>
        <Link to="/naujienos">Naujienos</Link>
        <Link to="/paslaugos">Paslaugos</Link>
        <Link to="/atlikti-darbai">Atlikti darbai</Link>
        <Link to="/kontaktai">Kontaktai</Link>
      </nav>
    </header>
  );
};

export default Header;
