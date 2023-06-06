import React from "react";

const Paslaugos = () => {
  const paslaugos = [
    {
      pavadinimas: "Ilgalaikis lakavimas",
      tekstas:
        "Ilgalaikis lakavimas yra nagų dažymo procesas, naudojant specialius ilgai išliekančius nagų lakus, kurie gali išlikti ant nagų nuo 7 iki 14 dienų be plyšimo ar nulūžimo.",
    },
    {
      pavadinimas: "Nagų dailė",
      tekstas:
        "Populiarumo viršūnėje natūraliai atrodantis manikiūras, prancūziškas manikiūras, švelniai pereinantis ombre lakavimas. ",
    },
    {
      pavadinimas: "Depiliacija",
      tekstas:
        "Depiliacija yra procedūra, skirta pašalinti ne norimą kūno plaukų augimą. Tai gali būti atliekama skirtingais būdais, naudojant skirtingus įrankius arba metodikas.",
    },
  ];

  return (
    <div>
      {paslaugos.map((paslauga, index) => (
        <div key={index}>
          <h3>{paslauga.pavadinimas}</h3>
          <p>{paslauga.tekstas}</p>
        </div>
      ))}
    </div>
  );
};

export default Paslaugos;
