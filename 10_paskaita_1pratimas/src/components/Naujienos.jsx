import React, { useEffect, useState } from "react";

const Naujienos = () => {
  const [naujienos, setNaujienos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setNaujienos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {naujienos.map((naujiena) => (
        <div key={naujiena.id}>
          <h3>{naujiena.title}</h3>
          <p>{naujiena.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Naujienos;
