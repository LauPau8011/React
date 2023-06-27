import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import "../../styles/App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={profile} alt="Profile" />
      </div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
