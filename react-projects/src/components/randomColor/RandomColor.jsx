import { useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  return (
    <div>
      <button onClick={() => setTypeOfColor("hex")}>Vytvoř HEX barvy</button>
      <button onClick={() => setTypeOfColor("rgb")}>Vytvoř RGB barvy</button>
    </div>
  );
};
