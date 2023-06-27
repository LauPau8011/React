import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setPosition("Dėkojame už jūsų pranešimą!");
  };

  return (
    <div>
      <h1>CONTACT</h1>
      <p>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible{" "}
      </p>
      <form onSubmit={handleFormSubmit}>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div>{position}</div>
    </div>
  );
};

export default Contact;
