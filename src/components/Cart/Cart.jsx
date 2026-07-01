import "./Cart.css";

function Cart({ cart, setCart }) {

  const increase = (name) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name) => {
    setCart((prev) =>
      prev.filter((item) => item.name !== name)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">

      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>

              <div>
                <h3>{item.name}</h3>
                <p>{item.price} Br</p>
              </div>

              <div className="quantity">

                <button onClick={() => decrease(item.name)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increase(item.name)}>
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.name)}
              >
                🗑
              </button>

            </div>
          ))}

          <hr />

          <h2>Total : {total} Br</h2>
        </>
      )}

    </section>
  );
}

export default Cart;