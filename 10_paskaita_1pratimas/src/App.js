import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagrindinis from "./components/Pagrindinis";
import ApieMus from "./components/ApieMus";
import Naujienos from "./components/Naujienos";
import Paslaugos from "./components/Paslaugos";
import AtliktiDarbai from "./components/AtliktiDarbai";
import Kontaktai from "./components/Kontaktai";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Pagrindinis />} />
          <Route path="/apie-mus" element={<ApieMus />} />
          <Route path="/naujienos" element={<Naujienos />} />
          <Route path="/paslaugos" element={<Paslaugos />} />
          <Route path="/atlikti-darbai" element={<AtliktiDarbai />} />
          <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
