import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, title, variant }) => {
  return (
    <button onClick={onClick} className={`button ${variant}`}>
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]).isRequired,
};

export default Button;
