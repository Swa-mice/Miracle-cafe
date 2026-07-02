import "./BestSeller.css";

function BestSeller() {
  return (
    <section className="best">

      <h2>🔥 Best Sellers</h2>

      <div className="best-grid">

        <div className="best-card">
          <h3>🍔 Miracle Burger</h3>
          <p>220 Birr</p>
        </div>

        <div className="best-card">
          <h3>🍕 Chicken Pizza</h3>
          <p>450 Birr</p>
        </div>

        <div className="best-card">
          <h3>☕ Cappuccino</h3>
          <p>120 Birr</p>
        </div>

        <div className="best-card">
          <h3>🍛 Beyaynetu</h3>
          <p>280 Birr</p>
        </div>

      </div>

    </section>
  );
}

export default BestSeller;