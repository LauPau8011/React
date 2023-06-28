import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import "../../styles/App.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <div className="left-section">
          <div className="logo-container">
            <img className="logo" src={profile} alt="Profile" />
            <div className="name">Laura Januleviciute</div>
          </div>
        </div>
        <div className="right-section">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
