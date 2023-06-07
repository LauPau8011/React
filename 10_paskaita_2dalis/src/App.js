import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import heroImg from "./images/hero.jpg";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users users={users} />} />
          <Route path="/users/:id" element={<User users={users} />} />
        </Routes>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Visos teisės saugomos</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h1>Sveiki atvykę į grožio pasaulį!</h1>
      <img src={heroImg} alt="Hero" className="hero-image" />
    </div>
  );
}

function Users({ users }) {
  const navigate = useNavigate();

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="users-container">
      <h1>Users</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <button onClick={() => handleUserClick(user.id)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function User({ users }) {
  const userId = window.location.pathname.split("/users/")[1]; //savybė, kuri grąžina URL kelio dalį (be domeno ir parametrų).[1]reiškia, kad gautas masyvas yra padalintas į dvi dalis: prieš "/users/" dalį ir po jo dalį.
  const user = users.find((u) => u.id === parseInt(userId)); //Jeigu sąlyga tenkinama tuomet reiškia, kad buvo rastas vartotojas, kurio identifikatorius atitinka userId. Šis rastas vartotojas yra grąžinamas kaip rezultatas.

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-container">
      <h1>User Information</h1>
      <div className="user-card">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    </div>
  );
}

export default App;
