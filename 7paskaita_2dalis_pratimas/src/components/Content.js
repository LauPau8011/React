import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  const contentStyles = {
    background: theme === "light" ? "#f9f9f9" : "#444",
    color: theme === "light" ? "#333" : "#f0f0f0",
    padding: "1rem",
  };

  return (
    <div style={contentStyles}>
      <h2>Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Content;
