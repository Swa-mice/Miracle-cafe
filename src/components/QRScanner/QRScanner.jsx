import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function QRScanner() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 }
    );

    scanner.render(
      (decodedText) => {
        alert("QR SCANNED SUCCESSFULLY:\n" + decodedText);
      },
      (error) => {
        // ignore scan errors
      }
    );

    return () => scanner.clear();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📷 QR Scanner Test</h2>
      <div id="reader" style={{ width: "300px", margin: "auto" }}></div>
    </div>
  );
}

export default QRScanner;