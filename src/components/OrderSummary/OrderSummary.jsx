import "./OrderSummary.css";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function OrderSummary({
  cart,
  customerName,
  orderType,
  tableNumber,
  packageNeeded,
  note,
  setCurrentOrder,
  setCart,
}) {
  const orderNumber = Math.floor(Math.random() * 9000) + 1000;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = async () => {
    if (!cart || cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const order = {
      orderNumber,
      customerName,
      orderType,
      tableNumber,
      packageNeeded,
      note,
      items: cart,
      total,
      status: "Pending",
      createdAt: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);

      setCurrentOrder({
        id: docRef.id,
        ...order,
      });

      setCart([]);

      alert("Order saved!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <section className="order-summary">
      <h2>Order Summary</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="summary-item">
              <span>{item.name} × {item.quantity}</span>
              <span>ETB {item.price * item.quantity}</span>
            </div>
          ))}

          <hr />

          <h3>Total: ETB {total}</h3>

         

          <button className="confirm-btn" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </section>
  );
}

export default OrderSummary;