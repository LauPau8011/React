import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({ image, title, price }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  const handleRemoveFromCart = () => {
    setAddedToCart(false);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      {addedToCart ? (
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  /* onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired, */
};

export default ProductCard;
