import React from "react";
import Header from "../Header/Header";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="projects-container">
        <h1>My Projects</h1>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
