import React from "react";
import PropTypes from "prop-types";

class ClassButton extends React.Component {
  render() {
    return <button>{this.props.title}</button>;
  }
}
ClassButton.propTypes = {
  title: PropTypes.string,
};

export default ClassButton;
