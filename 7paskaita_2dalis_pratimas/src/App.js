// App.js
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Button from "./components/Button";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <Button />
      </div>
    </ThemeProvider>
  );
};

export default App;
