import React from "react";
/* import { Link } from "react-router-dom";
import background from "../../images/backgrounds-portfolio.jpg"; */
import "../../styles/App.css";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <h1>Hi, I'm Laura Januleviciute</h1>
      <p>Ką aš darau</p>
      {/*  <Link to="/images">
        <div className="image-container">
          <img src={background} alt="background" />
        </div>
      </Link> */}
    </div>
  );
};

export default Home;
