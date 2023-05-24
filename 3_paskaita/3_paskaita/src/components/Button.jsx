// Sukurti komponentą Button, kuris turės props title ir variant.Variant parametras gali būti :"text", "contained" arba
// "outlined". Padavus skirtingą parametrą turi atsivaizduoti skirtingos spalvos mygtukas
import PropTypes from "prop-types";

const Button = ({ title, variant }) => {
  let buttonClass = "button";

  if (variant === "contained") {
    buttonClass += " button-contained";
  } else if (variant === "outlined") {
    buttonClass += " button-outlined";
  }

  return <button className={buttonClass}>{title}</button>;
};

Button.protTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf("text", "contained", "outlined"),
};

/*senesnis būdas
Button.defaultProps={
  variant:"text"
};*/
export default Button;

/* 
import PropTypes from "prop-types";

// naujesnis būdas: variant = "text"
const Button = ({ title, variant = "text" }) => {
  return <button className={`btn ${variant}`}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
};

// senesnis būdas
// Button.defaultProps = {
//   variant: "text",
// };

export default Button;
 */
