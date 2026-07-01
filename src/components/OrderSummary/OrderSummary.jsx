import "./OrderSummary.css";
import QRCode from "react-qr-code";

function OrderSummary({
  cart,
  customerName,
  orderType,
  tableNumber,
  paymentMethod,
  packageNeeded,
  note,
  setCurrentOrder,
  setCart,
  currentOrder, // 👈 ADD THIS (important for QR display)
}) {
  const orderNumber = Math.floor(Math.random() * 9000) + 1000;
  const date = new Date();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const order = {
      orderNumber,
      customerName,
      orderType,
      tableNumber,
      paymentMethod,
      packageNeeded,
      note,
      items: cart,
      total,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };

    setCurrentOrder(order);
    setCart([]);
  };

  // 👇 QR VALUE (ONLY when order exists)
  const qrValue = currentOrder
    ? `
Miracle Cafe
Order #${currentOrder.orderNumber}
Customer: ${currentOrder.customerName}
Order Type: ${currentOrder.orderType}
Table: ${currentOrder.tableNumber}
Payment: ${currentOrder.paymentMethod}
Total: ${currentOrder.total} Br
Date: ${currentOrder.date}
Time: ${currentOrder.time}
`
    : "";

  return (
    <section className="order-summary">
      <h2>🧾 Order Summary</h2>

      <div className="summary-box">
        <p>
          <strong>Order #:</strong> {orderNumber}
        </p>

        <p>
          <strong>Date:</strong> {date.toLocaleDateString()}
        </p>

        <p>
          <strong>Time:</strong> {date.toLocaleTimeString()}
        </p>

        <hr />

        <p>
          <strong>Customer:</strong> {customerName || "Not Entered"}
        </p>

        <p>
          <strong>Order Type:</strong> {orderType}
        </p>

        {orderType === "Dine In" && (
          <p>
            <strong>Table:</strong> {tableNumber || "Not Selected"}
          </p>
        )}

        <p>
          <strong>Payment:</strong> {paymentMethod}
        </p>

        <p>
          <strong>Package:</strong> {packageNeeded ? "Yes" : "No"}
        </p>

        <p>
          <strong>Note:</strong> {note || "None"}
        </p>

        <hr />

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="summary-item" key={item.name}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{item.price * item.quantity} Br</span>
            </div>
          ))
        )}

        <hr />

        <h3>Total: {total} Br</h3>

        <button className="confirm-btn" onClick={handleConfirmOrder}>
          Confirm Order
        </button>

        {/* 👇 QR CODE SHOWS AFTER ORDER IS CONFIRMED */}
        {currentOrder && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h3>📱 Scan Your Order QR</h3>
            <QRCode value={qrValue} />
          </div>
        )}
      </div>
    </section>
  );
}

export default OrderSummary;