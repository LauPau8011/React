import React, { useEffect, useState } from "react";

function Photo() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => {
        setPhotos(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photo;
