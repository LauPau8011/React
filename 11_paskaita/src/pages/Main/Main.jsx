import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contacts");
  };

  return (
    <div className="container">
      <h1>Statybų Kodas</h1>
      <p>
        Construction code - April 5, 2007 established construction company. From
        since the beginning of the foundation we are constantly growing and
        improving, currently our team consists of over 100 employees. We have
        been working in the construction market for 14 years and we always
        fulfill customer requirements responsibly and try our best meet their
        expectations. During our years of operation, we have gained a lot of
        experience building various purpose structures for both public and
        business sectors. With our work, we have earned a reliable contractor
        and partner name. We take a responsible approach to environmental
        protection and the safety of our employees and we strive to meet the
        highest quality requirements, therefore we have improved our management
        systems in accordance with ISO standards and we have been certified by
        TÜV:
      </p>
      <h2>Our services</h2>
      <ul>
        <li>Construction project management</li>
        <li>Construction of new buildings</li>
        <li>Repair and renovation works</li>
        <li>Interior design and installation</li>
        <li>Maintenance of terraces and yards</li>
        <li>Electrical and plumbing installation works</li>
        <li>Finishing works: brick, tile, floor laying</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        The goal of our company is to ensure and meet the needs of our customers
        precise. We are characterized by professionalism, quality and
        performance accuracy. We work with reliable suppliers and use high
        quality materials and equipment. Our team is made up of experienced
        people specialists who perform work in a timely and efficient manner.
      </p>
      <p>
        Contact us to learn more about our services or request a free
        consultation and quote.
      </p>
      <button onClick={handleContactClick}>Contact us</button>
    </div>
  );
};

export default Main;
