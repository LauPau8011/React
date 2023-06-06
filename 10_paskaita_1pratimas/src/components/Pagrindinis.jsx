import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../images/download.jpg";

const Pagrindinis = () => {
  return (
    <div className="main-container">
      <Link to="/images">
        <img
          src={backgroundImg}
          alt="background"
          className="full-width-height"
        />
      </Link>
    </div>
  );
};

export default Pagrindinis;
