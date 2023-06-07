import React from "react";
import { Link } from "react-router-dom";
import heroI from "../images/hero.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Sveiki atvykę į grožio pasaulį!</h1>
      <Link to="/images">
        <div className="image-container">
          <img src={heroI} alt="hero" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
