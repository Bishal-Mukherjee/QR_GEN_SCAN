import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

const QrScanner = () => {
  const navigate = useNavigate();
  const [scannedCode, setScannedCode] = useState("");
  const constraints = {
    facingMode: "environment",
  };

  const handleScannedCode = (text) => {
    try {
      setScannedCode(text);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "5rem", height: "25rem", width: "25rem" }}>
          <QrReader
            onResult={(result, error) => {
              handleScannedCode(result.getText());
            }}
            constraints={constraints}
          />
          {scannedCode !== "" && (
            <h2 style={{ marginTop: "1rem" }}>{scannedCode}</h2>
          )}
        </div>
      </div>
      <button
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
        onClick={() => navigate("/scanner")}
      >
        Navigate to Generator
      </button>
    </div>
  );
};

export default QrScanner;
