import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1>Hi, I'm Laura Januleviciute</h1>
        <p>I'm a front-end web developer</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
