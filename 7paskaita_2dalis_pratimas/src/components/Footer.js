import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const footerStyles = {
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#333" : "#f0f0f0",
    padding: "1rem",
  };

  return (
    <footer style={footerStyles}>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;
