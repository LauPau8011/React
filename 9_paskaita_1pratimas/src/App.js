import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]); //state naudojamas saugoti gautus duomenis iš API užklausos
  const [isLoading, setIsLoading] = useState(true); //state naudojamas nustatyti, ar duomenys iš API dar kraunasi ar jau buvo įkelti.

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };
  
  const formatPrice = (price) => {
    //skirta formatuoti kainos reikšmę į valiutos formatą
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "EUR",
    });
  };

  return (
    <div className="app">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-row">
          {data
            .slice(0, 2)
            .concat(data.slice(0, 2))
            .concat(data.slice(0, 2))
            .map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} className="card-image" />
                <div className="card-content">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-price">{formatPrice(item.price)}</p>
                  <button
                    className="card-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Ištrinti
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
