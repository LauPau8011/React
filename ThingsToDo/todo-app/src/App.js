import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Build a React App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newId = todos.length + 1;
      const newTodoObj = { id: newId, title: newTodo, completed: false };
      setTodos([...todos, newTodoObj]);
      setNewTodo("");
    }
  };
  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>THINGS TO DO</h1>
      <div className="inpBtn">
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add New</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
