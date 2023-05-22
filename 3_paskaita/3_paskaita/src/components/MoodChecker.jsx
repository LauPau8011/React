//Sukurti komponentą MoodChecker, kuris savy turės h2 tag'ą su tekstu "Kaip jaučiatės?"
//ir po juo bus trys button tag'aisu tekstais:a) Jaučiuosi prastai:( b)Jaučiuosi normaliai:| c)Jaučiuosi puikiai:)
import React from "react";

const MoodChecker = () => {
  return (
    <div>
      <h2>Kaip jaučiatės?</h2>
      <button>Jaučiuosi prastai:(</button>
      <button>Jaučiuosi normaliai:|</button>
      <button>Jaučiuosi puikiai:)</button>
    </div>
  );
};

export default MoodChecker;
