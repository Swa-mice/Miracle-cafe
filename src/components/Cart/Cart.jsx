import "./Cart.css";

function Cart({ cart, setCart }) {
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQty = (index, type) => {
    const newCart = [...cart];

    if (type === "inc") {
      newCart[index].quantity += 1;
    } else if (type === "dec" && newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    }

    setCart(newCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>

              <div className="qty-controls">
                <button onClick={() => updateQty(index, "dec")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQty(index, "inc")}>+</button>
              </div>

              <p>ETB {item.price * item.quantity}</p>

              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}

          <h3>Total: ETB {total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;