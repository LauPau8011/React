// Sukurkite šiuos komponentus:
// Posts;
// Post;
// Pagrindiniame komponente (App.js), turi būti randamas <Posts/>, komponentas, kuris savyje laikys <Post/> komponentą. kuris atvaizduos duomenis (props: title ir body). <Posts/> komponentas, informaciją pasiims iš čia:
// URI https://jsonplaceholder.typicode.com/posts
// Būtina naudoti: useState, useEffect
//
//
//Sukurkite aplikaciją kuri ištraukia duomenis iš https://jsonplaceholder.typicode.com/photos
//ir atvaizduoja ją Photo.jsx komponente. Photo komponentas turi turėsi imageUrl ir title parametrus

import Photo from "./components/Photo/Photo";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <>
      <div>
        <Posts />
      </div>
      <div>
        <Photo />
      </div>
    </>
  );
};

export default App;
