import React from "react";
import { Route } from "react-router-dom";
import About from "../components/About/About";

const AboutPage = () => {
  return (
    <div>
      <Route path="/about" component={About} />
    </div>
  );
};

export default AboutPage;
