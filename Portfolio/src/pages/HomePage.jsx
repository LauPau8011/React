import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import profile from "../../images/profile.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default HomePage;
