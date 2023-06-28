import React from "react";
/* import { Link } from "react-router-dom";
import background from "../../images/backgrounds-portfolio.jpg"; */
import "../../styles/App.css";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1>Hi, I'm Laura Januleviciute</h1>
        <p>I'm a front-end web developer</p>
      </div>

      {/*  <Link to="/images">
        <div className="image-container">
          <img src={background} alt="background" />
        </div>
      </Link> */}
    </div>
  );
};

export default Home;
