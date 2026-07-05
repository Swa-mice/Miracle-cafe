import "./CustomerForm.css";
import { useState } from "react";

function CustomerForm({
  customerName,
  setCustomerName,
  orderType,
  setOrderType,
  tableNumber,
  setTableNumber,
  note,
  setNote,
}) {
  return (
    <div className="customer-form">
      <h2>Customer Details</h2>

      <input
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <select
        value={orderType}
        onChange={(e) => setOrderType(e.target.value)}
      >
        <option>Dine In</option>
        <option>Take Away</option>
      </select>

      <input
        placeholder="Table Number (optional)"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
      />

      <textarea
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}

export default CustomerForm;