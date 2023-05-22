import React from "react";
import Hero from "./Hero";

const App = () => {
  return (
    <div>
      <Hero title="Welcome to My Website" subtitle="Explore and enjoy!" />
      <Hero title="About Us" />
      <Hero subtitle="Contact us for more information" />
    </div>
  );
};

export default App;
