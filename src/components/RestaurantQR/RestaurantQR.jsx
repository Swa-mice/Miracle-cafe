import QRCode from "react-qr-code";
import "./RestaurantQR.css";

function RestaurantQR() {
  const url = `${window.location.origin}/table`;

  return (
    <div className="qr-container">
      <h2>🍽 Restaurant QR Code</h2>

      <p>Scan to order</p>

      <div className="qr-box">
        <QRCode value={url} size={200} />
      </div>

      <p className="qr-link">{url}</p>
    </div>
  );
}

export default RestaurantQR;