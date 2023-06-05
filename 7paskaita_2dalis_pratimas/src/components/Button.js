import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Change Theme (Current: {theme})</button>;
};

export default Button;
