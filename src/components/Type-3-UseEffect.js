import { useEffect, useState } from "react";

function Type3useEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect is Running! -- Type-3");
  }, [count1]);

  function add() {
    setCount1((prevValue) => prevValue + 1);
  }

  function sub() {
    setCount2((prevValue) => prevValue - 1);
  }

  return (
    <div>
      <h2>{"useEffect is Running, with Single Dependency -- Type-3"}</h2>
      <h1>{count1}</h1>
      <button onClick={add}>+ Add</button>
      <h1>{count2}</h1>
      <button onClick={sub}>+ Add</button>
    </div>
  );
}

export default Type3useEffect;
