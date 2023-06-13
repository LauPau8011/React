import React from "react";
import "./Contact.css";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div>
        <span>Phone Number: </span>
        <span>+123456789</span>
      </div>
      <div>
        <span>Email: </span>
        <span>email@email.com</span>
      </div>
      <div>
        <span>Address: </span>
        <span>Savanoriu Street 292, Kaunas</span>
      </div>
    </div>
  );
};

export default Contacts;
