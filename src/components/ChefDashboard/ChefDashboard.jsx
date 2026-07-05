import { useState, useEffect } from "react";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
function ChefDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Only show active orders
      setOrders(
        data.filter(
          (o) => o.status !== "Completed"
        )
      );
    });

    return () => unsub();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "orders", id), { status });
  };

  return (
    <div className="chef">
      <h1>👨‍🍳 Kitchen Screen</h1>

      <div className="chef-grid">
        {orders.length === 0 ? (
          <p>No active orders</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="chef-card">

              <h2>Order #{order.orderNumber}</h2>
              <p>Table: {order.tableNumber}</p>

              <div className="chef-items">
                {order.items?.map((item, i) => (
                  <p key={i}>
                    🍽 {item.name} × {item.quantity}
                  </p>
                ))}
              </div>

              <h3 className={`status ${order.status}`}>
                {order.status || "Pending"}
              </h3>

              <div className="chef-actions">
                <button onClick={() => updateStatus(order.id, "Preparing")}>
                  🟡 Start Cooking
                </button>

                <button onClick={() => updateStatus(order.id, "Ready")}>
                  🍽 Ready
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ChefDashboard;