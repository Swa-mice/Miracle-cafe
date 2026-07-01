import "./Dashboard.css";

function Dashboard({ orders = [] }) {
  const totalSales = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return (
    <section className="dashboard">

      <h1>☕ Miracle Cafe Admin</h1>

      <div className="dashboard-grid">

        <div className="card">
          <h2>Orders</h2>
          <h1>{orders.length}</h1>
        </div>

        <div className="card">
          <h2>Total Sales</h2>
          <h1>{totalSales} Br</h1>
        </div>

        <div className="card">
          <h2>Customers</h2>
          <h1>{orders.length}</h1>
        </div>

      </div>

      <h2>Recent Orders</h2>

      <table className="orders-table">

        <thead>

          <tr>

            <th>#</th>

            <th>Customer</th>

            <th>Type</th>

            <th>Payment</th>

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.orderNumber}>

              <td>{order.orderNumber}</td>

              <td>{order.customerName}</td>

              <td>{order.orderType}</td>

              <td>{order.paymentMethod}</td>

              <td>{order.total} Br</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}

export default Dashboard;