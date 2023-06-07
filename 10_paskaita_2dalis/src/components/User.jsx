import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
/* import "./User.css"; */

function User({ users }) {
  const match = useRouteMatch("/users/:id");
  const id = parseInt(match.params.id);
  const [user, setUser] = useState(null);

  useEffect(() => {
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
