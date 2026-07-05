import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("admin"); // admin | chef
  const [newOrderAlert, setNewOrderAlert] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (data.length > orders.length) {
        setNewOrderAlert(true);
        setTimeout(() => setNewOrderAlert(false), 3000);
      }

      setOrders(data);
    });

    return () => unsub();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "orders", id), { status });
  };

  const deleteOrder = async (id) => {
    if (window.confirm("Delete this order?")) {
      await deleteDoc(doc(db, "orders", id));
    }
  };

  const filteredOrders = orders.filter((order) => {
    const value = search.toLowerCase();

    const matchesSearch =
      order.customerName?.toLowerCase().includes(value) ||
      order.tableNumber?.toString().includes(value) ||
      order.orderNumber?.toString().includes(value);

    const matchesFilter =
      filter === "All" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  // 📊 STATS
  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "Pending").length,
    preparing: orders.filter((o) => o.status === "Preparing").length,
    ready: orders.filter((o) => o.status === "Ready").length,
    completed: orders.filter((o) => o.status === "Completed").length,
    revenue: orders
      .filter((o) => o.status === "Completed")
      .reduce((sum, o) => sum + (o.total || 0), 0),
  };

  return (
    <div className="dashboard">

      {/* ALERT */}
      {newOrderAlert && (
        <div className="new-order-alert">
          🔔 New Order Received!
        </div>
      )}

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>☕ Miracle Cafe Dashboard</h1>

        <div>
          <button onClick={() => setView("admin")}>Admin</button>
          <button onClick={() => setView("chef")}>Chef</button>
        </div>

        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* STATS */}
      {view === "admin" && (
        <div className="stats">
          <div className="card">Total: {stats.total}</div>
          <div className="card">Pending: {stats.pending}</div>
          <div className="card">Preparing: {stats.preparing}</div>
          <div className="card">Ready: {stats.ready}</div>
          <div className="card">Completed: {stats.completed}</div>
          <div className="card">💰 ETB {stats.revenue}</div>
        </div>
      )}

      {/* FILTER */}
      {view === "admin" && (
        <div className="filters">
          {["All", "Pending", "Preparing", "Ready", "Completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "active" : ""}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* ORDERS */}
      <div className="orders-grid">

        {filteredOrders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="order-card">

              {/* CHEF VIEW */}
              {view === "chef" ? (
                <>
                  <h2>Order #{order.orderNumber}</h2>
                  <p>Table {order.tableNumber}</p>

                  <div className="items">
                    {order.items?.map((item, i) => (
                      <p key={i}>
                        🍽 {item.name} × {item.quantity}
                      </p>
                    ))}
                  </div>

                  <h3 className={`status ${order.status}`}>
                    {order.status || "Pending"}
                  </h3>

                  <div className="actions">
                    <button onClick={() => updateStatus(order.id, "Preparing")}>
                      Start Cooking
                    </button>
                    <button onClick={() => updateStatus(order.id, "Ready")}>
                      Ready
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* ADMIN VIEW */}
                  <div className="order-top">
                    <h3>Order #{order.orderNumber}</h3>
                    <span className={`status ${order.status}`}>
                      {order.status || "Pending"}
                    </span>
                  </div>

                  <p><strong>Customer:</strong> {order.customerName}</p>
                  <p><strong>Table:</strong> {order.tableNumber}</p>
                  <p><strong>Type:</strong> {order.orderType}</p>
                  <p><strong>Total:</strong> ETB {order.total}</p>

                  <div className="actions">
                    <button onClick={() => updateStatus(order.id, "Pending")}>Pending</button>
                    <button onClick={() => updateStatus(order.id, "Preparing")}>Preparing</button>
                    <button onClick={() => updateStatus(order.id, "Ready")}>Ready</button>
                    <button onClick={() => updateStatus(order.id, "Completed")}>Completed</button>

                    {order.status === "Completed" && (
                      <button className="delete" onClick={() => deleteOrder(order.id)}>
                        Delete
                      </button>
                    )}
                  </div>
                </>
              )}

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Dashboard;