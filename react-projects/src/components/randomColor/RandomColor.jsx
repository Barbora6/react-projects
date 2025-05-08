import { useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const vygenerujNahodnouBarvu = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[vygenerujNahodnouBarvu(hex.length)];
    }

    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = vygenerujNahodnouBarvu(256);
    const g = vygenerujNahodnouBarvu(256);
    const b = vygenerujNahodnouBarvu(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Vytvoř HEX barvy</button>
      <button onClick={() => setTypeOfColor("rgb")}>Vytvoř RGB barvy</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generátor náhodné barvy
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "48px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
