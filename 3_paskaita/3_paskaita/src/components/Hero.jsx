//sukurti Hero komponentą, kuris turės du props:title  ir subtitle.Jei title arba subtitle nepaduotas -h1 arba h2
//elementai net nesusikurs
import React from "react";
import PropTypes from "prop-types";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};
Hero.protTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
