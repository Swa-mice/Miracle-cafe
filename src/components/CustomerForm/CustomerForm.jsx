import "./CustomerForm.css";

function CustomerForm({
  customerName,
  setCustomerName,
  orderType,
  setOrderType,
  tableNumber,
  setTableNumber,
  paymentMethod,
  setPaymentMethod,
  packageNeeded,
  setPackageNeeded,
  note,
  setNote,
}) {
  return (
    <section className="customer-form">
      <h2>Customer Details</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <h3>Order Type</h3>

      <label>
        <input
          type="radio"
          value="Dine In"
          checked={orderType === "Dine In"}
          onChange={(e) => setOrderType(e.target.value)}
        />
        Dine In
      </label>

      <label>
        <input
          type="radio"
          value="Take Away"
          checked={orderType === "Take Away"}
          onChange={(e) => setOrderType(e.target.value)}
        />
        Take Away
      </label>

      {orderType === "Dine In" && (
        <>
          <h3>Table Number</h3>

          <select
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          >
            <option value="">Select Table</option>

            {Array.from({ length: 20 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Table {i + 1}
              </option>
            ))}
          </select>
        </>
      )}

      <h3>Payment</h3>

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option>Cash</option>
        <option>Telebirr</option>
        <option>CBE Birr</option>
        <option>Card</option>
      </select>

      <label className="package-box">
        <input
          type="checkbox"
          checked={packageNeeded}
          onChange={() => setPackageNeeded(!packageNeeded)}
        />
        Need Package
      </label>

      <textarea
        rows="5"
        placeholder="Special Notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button className="checkout-btn">
        Proceed to Checkout
      </button>
    </section>
  );
}

export default CustomerForm;