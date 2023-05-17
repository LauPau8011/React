import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return <div className="avatar">{initials}</div>;
};

Avatar.propTypes = {
  name: PropTypes.string,
};
export default Avatar;
