import React from "react";
import { Route } from "react-router-dom";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <div>
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default ContactPage;
