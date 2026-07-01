import "./FoodCard.css";

function FoodCard({ name, price, ingredients, food,
  setCart,}) {
  return (
    <div className="food-card">

      <div className="food-header">
        <h3>{name}</h3>

        <span className="price">
          {price} Br
        </span>
      </div>

      <p className="ingredients">
        {ingredients}
      </p>

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
          ? { ...item, quantity: item.quantity + 1 }
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
  🛒 Add to Cart
</button>

    </div>
  );
}

export default FoodCard;