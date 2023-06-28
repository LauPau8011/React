import React, { useState } from "react";
import Header from "../Header/Header";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Header />
      <div className="contact-form">
        <h1 className="contact-h1">CONTACT</h1>
        <p className="contact-p">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible{" "}
        </p>
        <div className="form">
          <form onSubmit={handleFormSubmit}>
            <div className="row contact-field">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="row contact-field">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="row contact-field">
              <label for="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
