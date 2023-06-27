import React from "react";
import { Route } from "react-router-dom";
import Projects from "../components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <div>
      <Route path="/projects" component={Projects} />
    </div>
  );
};

export default ProjectsPage;
