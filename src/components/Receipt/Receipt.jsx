import "./Receipt.css";

function Receipt({ currentOrder }) {
  if (!currentOrder) return null;

  return (
    <section className="receipt">

      <h1>☕ MIRACLE CAFE</h1>

      <h3>Thank You For Your Order</h3>

      <hr />

      <p><strong>Order #:</strong> {currentOrder.orderNumber}</p>

      <p><strong>Date:</strong> {currentOrder.date}</p>

      <p><strong>Time:</strong> {currentOrder.time}</p>

      <hr />

      <p><strong>Customer:</strong> {currentOrder.customerName}</p>

      <p><strong>Order Type:</strong> {currentOrder.orderType}</p>

      {currentOrder.orderType === "Dine In" && (
        <p><strong>Table:</strong> {currentOrder.tableNumber}</p>
      )}

      <p><strong>Payment:</strong> {currentOrder.paymentMethod}</p>

      <p>
        <strong>Package:</strong>{" "}
        {currentOrder.packageNeeded ? "Yes" : "No"}
      </p>

      <p>
        <strong>Note:</strong>{" "}
        {currentOrder.note || "None"}
      </p>

      <hr />

      {currentOrder.items.map((item) => (
        <div
          className="receipt-item"
          key={item.name}
        >
          <span>
            {item.name} × {item.quantity}
          </span>

          <span>
            {item.price * item.quantity} Br
          </span>
        </div>
      ))}

      <hr />

      <h2>Total: {currentOrder.total} Br</h2>

      <hr />

      <h3>Payment Information</h3>

      <p><strong>Telebirr:</strong> 09XXXXXXXX</p>

      <p><strong>CBE:</strong> 1000XXXXXXXX</p>

      <p>Commercial Bank of Ethiopia</p>

      <hr />

      <h3>Thank You ❤️</h3>

      <button
        className="print-btn"
        onClick={() => window.print()}
      >
        🖨 Print Receipt
      </button>

    </section>
  );
}

export default Receipt;