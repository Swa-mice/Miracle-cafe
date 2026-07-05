import "./RestaurantQR.css";
import QRCode from "react-qr-code";

function RestaurantQR() {
  return (
    <div className="qr-page">

      <h1>☕ Miracle Cafe</h1>

      <h2>Scan to Order</h2>

      <QRCode
        value="https://YOUR-VERCEL-DOMAIN.vercel.app"
        size={260}
      />

      <p>
        Scan the QR Code with your phone
      </p>

      <p>
        Enter your table number and place your order.
      </p>

    </div>
  );
}

export default RestaurantQR;