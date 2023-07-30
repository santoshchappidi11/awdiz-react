import React, { useRef, useState } from "react";
import "./UseRefHook1.css";

const UseRefHook1 = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div id="ref-hook">
      <div id="main">
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Focus Input</button>
        <h4>{inputValue}</h4>
      </div>
    </div>
  );
};

export default UseRefHook1;