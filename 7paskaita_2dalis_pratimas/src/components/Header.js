import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const headerStyles = {
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#333" : "#f0f0f0",
    padding: "1rem",
  };

  return (
    <header style={headerStyles}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
