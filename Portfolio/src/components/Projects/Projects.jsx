/* import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import nuotrauka from "../../images/portfolio.png";
import nuotrauka1 from "../../images/pexels-photo-397998.webp";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="projects-container">
        <h1>My Projects</h1>
        <ul>
          <li>
            <h2>Portfolio</h2>
            <p>Portfolio is an open source project created by me.</p>
            <img src={nuotrauka} alt="Dopefolio projekto ekrano nuotrauka" />
          </li>
          <li>
            <h2>Project 2</h2>
            <p>Project description</p>
            <img src={nuotrauka1} alt="Projekto ekrano nuotrauka" />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Projects; */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import nuotrauka from "../../images/portfolio.png";
import nuotrauka1 from "../../images/pexels-photo-397998.webp";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="projects-container">
        <h1>My Projects</h1>
        <ul>
          <li>
            <div className="project-info">
              <h2>Portfolio</h2>
              <p>Portfolio is an open source project created by me.</p>
            </div>
            <img src={nuotrauka} alt="Dopefolio projekto ekrano nuotrauka" />
          </li>
          <li>
            <div className="project-info">
              <h2>Project 2</h2>
              <p>COMING SOON</p>
            </div>
            <img src={nuotrauka1} alt="Projekto ekrano nuotrauka" />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
