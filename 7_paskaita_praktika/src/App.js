import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [firstname, setFirstname] = useState(""); //apsibrėžiame kintamuosius
  const [age, setAge] = useState(0);

  const handleInputChange = (e) => {
    if (e.target.name === "firstname") {
      setFirstname(e.target.value);
    } else if (e.target.name === "age") {
      setAge(parseInt(e.target.value)); //parseInt() funkcija - kuri konvertuoja duotą reikšmę į sveikąjį skaičių. Ji paima tekstinę reikšmę kaip argumentą ir grąžina sveikąjį skaičių.
    }
  };

  const handleAddTenYears = () => {
    setAge(age + 10);
  };

  return (
    <>
      <div>
        <label>
          First name:
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleAddTenYears}>Add 10 years</button>
      </div>
      <p>Your age is {age}</p>
    </>
  );
};

export default App;
