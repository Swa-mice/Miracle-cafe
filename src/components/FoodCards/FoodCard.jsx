import "./FoodCard.css";

function FoodCard({
  name,
  price,
  ingredients,
  image,
  food,
  setCart,
}) {
  return (
    <div className="food-card">

      <div className="food-image">
        <img
          src={image}
          alt={name}
        />

        <span className="food-price">
          ETB {price}
        </span>
      </div>

      <div className="food-content">
        <h3>{name}</h3>

        <p>{ingredients}</p>

        <button
          className="order-btn"
          onClick={() => {
            setCart((previousCart) => {
              const existingFood = previousCart.find(
                (item) => item.name === food.name
              );

              if (existingFood) {
                return previousCart.map((item) =>
                  item.name === food.name
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                      }
                    : item
                );
              }

              return [
                ...previousCart,
                {
                  ...food,
                  quantity: 1,
                },
              ];
            });
          }}
        >
          🛒 Add To Cart
        </button>
      </div>

    </div>
  );
}

export default FoodCard;