import { useEffect, useState } from "react";

function Type1useEffect() {
  const [count, setCount] = useState(0);

  //   useeffect takes two args 1->callbackfun, 2->an empty array
  // type-1 runs without an empty array, and it runs whenever the component re-renders
  useEffect(() => {
    console.log("useEffect is running -- Type-1");
  });

  function add() {
    setCount((prevValue) => prevValue + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+ Addition</button>
    </div>
  );
}

export default Type1useEffect;
