import React, { useState } from "react";

const Kontaktai = () => {
  const [vardas, setVardas] = useState("");
  const [email, setEmail] = useState("");
  const [zinute, setZinute] = useState("");
  const [padetis, setPadetis] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setVardas("");
    setEmail("");
    setZinute("");
    setPadetis("Dėkojame už jūsų pranešimą!");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="vardas">Vardas:</label>
        <input
          type="text"
          id="vardas"
          value={vardas}
          onChange={(e) => setVardas(e.target.value)}
        />

        <label htmlFor="email">El. paštas:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="zinute">Žinutė:</label>
        <textarea
          id="zinute"
          value={zinute}
          onChange={(e) => setZinute(e.target.value)}
        ></textarea>

        <button type="submit">Siųsti</button>
      </form>

      <div>{padetis}</div>
    </div>
  );
};

export default Kontaktai;
