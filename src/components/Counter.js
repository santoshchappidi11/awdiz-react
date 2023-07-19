import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevValue) => prevValue + 1);
  }

  function sub() {
    setCount((prevValue) => prevValue - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={add}>+ Addition</button>
      <button onClick={sub}>- Subtraction</button>
    </div>
  );
}

export default Counter;
