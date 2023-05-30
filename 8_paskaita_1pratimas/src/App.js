import React from "react";
import "./App.css";
import sunflowersImage from "./images/sunflowers.jpg";
import forestImage from "./images/forest.jpg";

const images = [
  { id: 1, title: "Pirmas paveikslėlis", image: sunflowersImage },
  { id: 2, title: "Antras paveikslėlis", image: sunflowersImage },
  { id: 3, title: "Trečias paveikslėlis", image: sunflowersImage },
  { id: 4, title: "Ketvirtas paveikslėlis", image: forestImage },
  { id: 5, title: "Penktas paveikslėlis", image: forestImage },
  { id: 6, title: "Šeštas paveikslėlis", image: forestImage },
];
const Hero = () => {
  const sunflowersImages = images.slice(0, 3);
  const forestImages = images.slice(3, 6);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Website</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla ipsum ac metus aliquet, vitae pharetra nisl fringilla.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
      <div className="title">
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla ipsum ac metus aliquet, vitae pharetra nisl fringilla.
        </p>
      </div>
      <div className="card-row">
        {sunflowersImages.map((image) => (
          <div className="card" key={image.id}>
            <img src={image.image} alt={image.title} className="card-image" />
            <p className="card-title">{image.title}</p>
          </div>
        ))}
      </div>
      <div className="card-row">
        {forestImages.map((image) => (
          <div className="card" key={image.id}>
            <img src={image.image} alt={image.title} className="card-image" />
            <p className="card-title">{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="app">
      <Hero />
    </div>
  );
};

export default App;
