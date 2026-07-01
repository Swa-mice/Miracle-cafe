import "./SpecialCard.css";

function SpecialCard({
  image,
  name,
  price,
  rating,
  description,
  badge,
}) {
  return (
    <div className="special-card">

      <span className="badge">
        {badge}
      </span>

      <img
        src={image}
        alt={name}
        className="special-image"
      />

      <h2>{name}</h2>

      <p className="rating">
        ⭐ {rating}
      </p>

      <p className="description">
        {description}
      </p>

      <h3>{price} Birr</h3>

      <button className="order-btn">
        🛒 Order Now
      </button>

    </div>
  );
}

export default SpecialCard;