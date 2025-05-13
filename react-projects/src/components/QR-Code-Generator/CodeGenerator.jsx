import { useState } from "react";
import QRCode from "react-qr-code";

export const CodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Zadejte požadovanou hodnotu:"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

// input && input.trim() !== "":

// nejprve ověří, jestli input vůbec existuje (není null nebo undefined),

// pak odstraní bílé znaky zleva i zprava (trim()) a ověří, že výsledek není prázdný řetězec.

// Pokud podmínka platí (vstup není prázdný), vrátí false – tlačítko není zakázané.

// Pokud podmínka neplatí (vstup je null, undefined nebo jen bílé znaky), vrátí true – tlačítko je zakázané.
