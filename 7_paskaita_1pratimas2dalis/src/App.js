import React, { useState } from "react";

const App = () => {
  const [kilograms, setKilograms] = useState("");
  const [tons, setTons] = useState("");
  const [grams, setGrams] = useState("");
  const [pounds, setPounds] = useState("");

  const handleInputChange = (e) => {
    setKilograms(e.target.value);
  };

  const handleConversion = () => {
    const kg = parseFloat(kilograms);
    const tonsValue = (kg * 0.001).toFixed(2);
    const gramsValue = (kg * 1000).toFixed(2);
    const poundsValue = (kg * 2.20462262185).toFixed(2);

    setTons(tonsValue);
    setGrams(gramsValue);
    setPounds(poundsValue);
  };

  return (
    <div>
      <input type="text" value={kilograms} onChange={handleInputChange} />
      <button onClick={handleConversion}>Convert</button>

      <div>
        <p>Tons: {tons}</p>
        <p>Grams: {grams}</p>
        <p>Pounds: {pounds}</p>
      </div>
    </div>
  );
};

export default App;
