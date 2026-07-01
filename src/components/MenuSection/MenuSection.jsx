import FoodCard from "../FoodCards/FoodCard";
import "./MenuSection.css";

function MenuSection({ title, foods, setCart }) {
  return (
    <section className="menu-section">
      <h2>{title}</h2>

      <div className="grid">
        {foods.map((food) => (
          <FoodCard
            key={food.name}
            name={food.name}
            price={food.price}
            ingredients={food.ingredients}
            food={food}
            setCart={setCart}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;