import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import profile from "../../images/profile.png";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Visos teisės saugomos</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
