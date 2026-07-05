import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import "./TableOrder.css";

function Table() {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [step, setStep] = useState("form");

  const startOrder = () => {
    if (!customerName || !tableNumber) {
      alert("Please enter name and table number");
      return;
    }
    setStep("done");
  };

  const sendOrder = async (cart) => {
    await addDoc(collection(db, "orders"), {
      orderNumber: Math.floor(Math.random() * 10000),
      customerName,
      tableNumber,
      orderType: "Dine In",
      items: cart,
      total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
      status: "Pending",
      createdAt: serverTimestamp(),
    });

    alert("Order sent to kitchen!");
  };

  return (
    <div className="table-container">

      {step === "form" && (
        <div className="table-form">
          <h1>🍽 Welcome to Miracle Cafe</h1>

          <input
            placeholder="Your Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            placeholder="Table Number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          />

          <button onClick={startOrder}>Start Order</button>
        </div>
      )}

      {step === "done" && (
        <div className="table-ready">
          <h2>Welcome {customerName}</h2>
          <p>Table {tableNumber}</p>

          <p>Now connect this with your menu/cart system</p>

          <p className="note">
            (This page will later link to your full menu system)
          </p>
        </div>
      )}
    </div>
  );
}

export default Table;