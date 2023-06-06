import React from "react";
import atliktasDarbas1 from "../images/atliktasdarbas1.jpg";
import atliktasDarbas2 from "../images/atliktasdarbas2.jpg";
import atliktasDarbas3 from "../images/atliktasdarbas3.jpg";
import atliktasDarbas4 from "../images/atliktasdarbas4.jpg";
import atliktasDarbas5 from "../images/atliktasdarbas5.jpg";
import atliktasDarbas6 from "../images/atliktasdarbas6.jpg";
import atliktasDarbas7 from "../images/atliktasdarbas7.jpg";
import atliktasDarbas8 from "../images/atliktasdarbas8.jpg";

const AtliktiDarbai = () => {
  const nuotraukos = [
    atliktasDarbas1,
    atliktasDarbas2,
    atliktasDarbas3,
    atliktasDarbas4,
    atliktasDarbas5,
    atliktasDarbas6,
    atliktasDarbas7,
    atliktasDarbas8,
  ];

  return (
    <div className="image-grid">
      {nuotraukos.map((nuotrauka, index) => (
        <div className="image-item" key={index}>
          <img src={nuotrauka} alt={`Nuotrauka ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default AtliktiDarbai;
