import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { FaBackward, FaForward } from "react-icons/fa";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const { image, title, price, description, availability, category } = props;

  return (
    <div className="product-container">
      <img className="image" src={image} alt={title} />
      <div className="props">
        <h3>
          {title}
          <FaBackward />
          <FaForward />
        </h3>
        <p>
          <strong>{price}</strong>
        </p>
        <p class="fontS">{description}</p>
        <p>
          <strong>{availability}</strong>
        </p>
        <p>Quantity: {quantity}</p>
        <Button onClick={increaseQuantity} title="+" />
        <Button onClick={decreaseQuantity} title="-" />
        <button type="submit">ADD TO CARD</button>
        <p class="fontS">{category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
