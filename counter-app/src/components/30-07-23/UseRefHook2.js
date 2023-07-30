import React, { useEffect, useRef, useState } from "react";
import "./UseRefHook2.css";

const UseRefHook2 = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputVal = useRef("");
  const renderCount = useRef(0);

  useEffect(() => {
    previousInputVal.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div id="ref-hook">
      <div id="main">
        <h2>Count: {renderCount.current}</h2>
        <input
          type="text"
          ref={previousInputVal}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* <button onClick={handleClick}>Focus Input</button> */}
        <h3>Current Value: {inputValue}</h3>
        <h3>Previous Value: {previousInputVal.current}</h3>
      </div>
    </div>
  );
};

export default UseRefHook2;
