import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    const inputLength = inputText.length;

    if (inputLength < 3) {
      setBackgroundColor("white");
    } else if (inputLength < 6) {
      setBackgroundColor("yellow");
    } else if (inputLength < 9) {
      setBackgroundColor("green");
    } else {
      setBackgroundColor("red");
    }
  }, [inputText]);

  return (
    <div className="container" style={{ backgroundColor }}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default App;
