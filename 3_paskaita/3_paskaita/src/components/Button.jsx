// Sukurti komponentą Button, kuris turės props title ir variant.Variant parametras gali būti :"text", "contained" arba
// "outlined". Padavus skirtingą parametrą turi atsivaizduoti skirtingos spalvos mygtukas
import React from "react";

const Button = ({ title, variant }) => {
  let buttonClass = "button";

  if (variant === "contained") {
    buttonClass += " button-contained";
  } else if (variant === "outlined") {
    buttonClass += " button-outlined";
  }

  return <button className={buttonClass}>{title}</button>;
};

export default Button;
