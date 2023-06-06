import React from "react";
import apieMusOfis from "../images/apiemusofis.jpg";

const ApieMus = () => {
  return (
    <div className="apie-mus">
      <h2 className="apie-mus-heading">Maddam grožio namų puslapis</h2>
      <div className="apie-mus-image-container">
        <img
          className="apie-mus-image"
          src={apieMusOfis}
          alt="Nuotrauka apie mus"
        />
      </div>
      <p>
        Tekstas apie mus: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Unde quam, maxime quae vitae nobis autem, minus iure quo tempore
        deserunt maiores culpa odit, fugiat reprehenderit commodi expedita enim
        corporis rem.
      </p>
    </div>
  );
};

export default ApieMus;
