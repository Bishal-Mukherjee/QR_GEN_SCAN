import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const QrGenerator = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [showQr, setShowQr] = useState(false);

  return (
    <div>
      <form
        style={{ marginTop: "2rem" }}
        onSubmit={(e) => {
          e.preventDefault();
          setShowQr(true);
        }}
      >
        <input
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: "1rem" }}>
          Generate
        </button>
      </form>

      {showQr ? (
        <QRCode
          style={{
            marginTop: "5rem",
          }}
          value={code}
        />
      ) : null}

      <button
        style={{ marginTop: "5rem" }}
        onClick={() => navigate("/scanner")}
      >
        Navigate to Scanner
      </button>
    </div>
  );
};

export default QrGenerator;
