import React, { useState } from "react";

const DynamicStyles = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  function ChangeBackgroundColor() {
    setBackgroundColor("blue");
  }

  return (
    <div
      style={{
        backgroundColor,
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={ChangeBackgroundColor}
    >
      Click me to change the Background Color
    </div>
  );
};

export default DynamicStyles;
