import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [entries, setEntries] = useState([]); //masyvas, kuriame saugomi visi įrašai
  const [inputValue, setInputValue] = useState(""); //kintamasis, kuriame saugoma input reikšmė

  useEffect(() => {
    //paleidžiamas vieną kartą,is skirtas gauti įrašus iš localStorage, tikrinti, ar jie yra,
    // ir nustatyti pradinę entries būsenos reikšmę iš gautų duomenų, jei jie egzistuoja.
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries)); // jei entries reikšmės yra, jas išskiriame iš JSON formato į masyvą naudodami JSON.parse()
      // funkciją ir nustatome šią reikšmę setEntries funkcijos pagalba, atnaujindami entries būseną.
    }
  }, []);

  useEffect(() => {
    //paleidžiamas kiekvieną kartą, kai entries būsena pasikeičia.Skirtas įrašyti entries būsenos reikšmę į localStorage
    localStorage.setItem("entries", JSON.stringify(entries)); //įrašome entries būsenos reikšmę į "entries" raktą
    //localStorage. Prieš tai, reikšmė konvertuojama iš masyvo formato į JSON formatą naudojant JSON.stringify() funkciją.
  }, [entries]);

  const handleInputChange = (e) => {
    //ši funkcija gauna įvesties reikšmę iš e.target.value ir nustato ją kaip naują inputValue
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      //tikrinam ar inputValue nėra tuščia reikšmė
      setEntries((prevEntries) => [...prevEntries, inputValue]); //jei įvestis nėra tuščia,pridedamas naujas įrašas į entries būseną
      // naujas įrašas pridedamas prie esamų entries naudojant išplėstinį masyvo operatorių (...).
      //Tai sukuria naują masyvą, kuris susideda iš ankstesnių įrašų (prevEntries) ir naujos įvesties reikšmės (inputValue).
      setInputValue(""); //po naujo įrašo pridėjimo, inputValue būsenos reikšmė nustatoma kaip tuščia, naudojant setInputValue(""), taip išvalant įvedimo laukelį.
    }
  };

  const handleDeleteEntry = (index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Įrašų sąrašas</h1>
      <ul>
        {entries.map(
          (
            entry,
            index //naudojam map, kad perreitume per entries masyvą ir kiekvienam įrašui sukurtume li
          ) => (
            <li key={index}>
              <div className="entry">
                <span className="entry-text">{entry}</span>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteEntry(index)}
                >
                  <span className="delete-icon">&times;</span>
                </button>
              </div>
            </li>
          )
        )}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <div class="submitForm">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: "90%" }}
          />
          <button type="submit">Pridėti</button>
        </div>
      </form>
    </div>
  );
};

export default App;
