import React from "react";
import PropTypes from "prop-types";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>Pavadinimas</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          perspiciatis voluptatem officiis quam laborumre necessitatibus impedit
          ipsam odio alias illum ullam dignissimos, rem dicta laboriosam id
          atque?
        </p>
        <button>{this.props.title}</button>
      </div>
    );
  }
}
ClassDiv.propTypes = {
  title: PropTypes.string,
};
export default ClassDiv;
