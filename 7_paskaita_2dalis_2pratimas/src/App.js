//Reik sukurti aplikaciją, kuri turės prisijungimo formą ir pasisveikinimą.Jei asmuo neprisijungęs, reik rodyti tekstą
//"Sveiki, kaip Jums sekasi?", jei asmuo prisijungęs nerodyti formos ir tekstas bus "Jūs esate prisijungęs" bei mygtuką
// "Atsijungti"-nuspaudęs mygtuką "Atsijungti" turime parodyti pradinę prisijungimo formą.

import React, { useState } from "react";
import "./App.css";
import backgroundImage1 from "./images/background1.jpg";
import backgroundImage2 from "./images/background2.jpg";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //kintamasis,nurodo, ar vartotojas yra prisijungęs (true) arba ne (false).
  const [username, setUsername] = useState(""); //kintamasis, kuriame saugomas vartotojo įvestas usernamas
  const [password, setPassword] = useState(""); //kintamasis, kuriame saugomas vartotojo įvestas slaptazodis
  const [errorMessage, setErrorMessage] = useState(""); //kintamasis, jame saugom klaidos žinutę, jei kažkas nepavyksta su prisijungimu
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1); //suagoma nuoroda į backgroundimage

  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setLoggedIn(true);
      setErrorMessage("");
      setBackgroundImage(backgroundImage2);
    } else {
      setErrorMessage("Neteisingas vartotojo vardas arba slaptažodis!");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setErrorMessage("");
    setBackgroundImage(backgroundImage1);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {loggedIn ? (
        <div>
          <h1>Jūs esate prisijungęs</h1>
          <button onClick={handleLogout}>Atsijungti</button>
        </div>
      ) : (
        <div className="formContainer">
          <h1>Sveiki, kaip Jums sekasi?</h1>
          <div className="inputContainer">
            <label>Vartotojo vardas:</label>
            <input
              className="inputField"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label>Slaptažodis:</label>
            <input
              className="inputField"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Prisijungti</button>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
