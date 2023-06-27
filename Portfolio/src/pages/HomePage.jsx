import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";

const HomePage = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default HomePage;
