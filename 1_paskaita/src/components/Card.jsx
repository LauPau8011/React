import PropTypes from "prop-types";

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
