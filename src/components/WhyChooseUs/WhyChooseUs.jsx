import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2>Why Choose Miracle Cafe?</h2>

      <div className="why-grid">

        <div className="why-card">
          <h3>☕ Premium Coffee</h3>
          <p>Fresh Ethiopian coffee prepared by experienced baristas.</p>
        </div>

        <div className="why-card">
          <h3>🍛 Authentic Food</h3>
          <p>Traditional Ethiopian meals with unforgettable taste.</p>
        </div>

        <div className="why-card">
          <h3>⚡ Fast Service</h3>
          <p>Quick ordering and fast delivery to your table.</p>
        </div>

        <div className="why-card">
          <h3>❤️ Friendly Staff</h3>
          <p>Professional hospitality that makes every guest feel welcome.</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;