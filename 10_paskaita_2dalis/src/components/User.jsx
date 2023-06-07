import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom"; //useRouteMach naudojamas tam, kad gautų informaciją apie maršruto atitikimą (match) su dabartiniu URL.

function User({ users }) {
  //apibrėžiam USER komponentą, kuriam perduodamas users parametras
  const match = useRouteMatch("/users/:id");
  const id = parseInt(match.params.id); //id yra konvertuojamas į skaičių naudojant parseInt funkciją
  const [user, setUser] = useState(null);

  useEffect(() => {
    //tiksas gauti user informaciją iš users masyvo pagal id reikšmę ir nustatyti gautus duomenis user būsenos kintamajam
    const fetchedUser = users.find((u) => u.id === id);
    setUser(fetchedUser);
  }, [users, id]);

  return (
    <div>
      <h1>User Information</h1>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/users">Go Back</Link>
    </div>
  );
}

export default User;
