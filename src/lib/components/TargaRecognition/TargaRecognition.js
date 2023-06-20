import React, { useState } from "react";
import Tesseract from "tesseract.js";

function TargaRecognition() {
  const [targa, setTarga] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (event) => {
    setError(null);
    setLoading(true);

    const imageFile = event.target.files[0];

    try {
      const { data } = await Tesseract.recognize(imageFile, "ita", {
        tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      });

      const text = data.text.replace(/[^A-Z0-9]/g, "");

      if (text.length >= 6 && text.length <= 8) {
        setTarga(text);
      } else {
        throw new Error("Nessuna targa valida trovata.");
      }
    } catch (error) {
      setError(
        "Errore durante il riconoscimento della targa: " + error.message
      );
    }

    setLoading(false);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {loading && <p>Caricamento in corso...</p>}
      {error && <p>{error}</p>}
      {targa && <p>Targa riconosciuta: {targa}</p>}
    </div>
  );
}

export default TargaRecognition;
