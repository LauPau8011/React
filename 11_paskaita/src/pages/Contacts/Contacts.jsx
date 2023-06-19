import React from "react";
import "./Contact.scss";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-details">
          <h2>Company Details</h2>
          <p>
            <strong>
              <FaMapMarkerAlt /> Statybu Kodas
            </strong>
            <br />
            <FaMapMarkerAlt /> Address: Draugystės g.19, Kaunas
            <br />
            <FaPhone /> Phone: +370 677 00000
            <br />
            <FaEnvelope /> Email: info@constructioncode.com
          </p>
        </div>

        <div className="map">
          <h2>
            <FaMapMarkerAlt /> Find Us
          </h2>
          <iframe
            title="Statybu Kodas Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.7507853128186!2d24.002072575874468!3d54.907296272782986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7183e2f55db13%3A0x36df0fb10207fbd8!2sDraugyst%C4%97s%20g.%2019%2C%2051230%20Kaunas!5e0!3m2!1slt!2slt!4v1686856183163!5m2!1slt!2slt"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="working-hours">
        <h2>
          <FaClock /> Working Hours
        </h2>
        <p>
          Monday - Friday: 8:00 AM - 6:00 PM
          <br />
          Saturday: 9:00 AM - 1:00 PM
          <br />
          Sunday: Closed
        </p>
      </div>
    </div>
  );
};

export default Contacts;
