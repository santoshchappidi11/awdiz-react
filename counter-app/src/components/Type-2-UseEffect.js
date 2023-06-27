import { useEffect, useState } from "react";
// import axios from "axios";

function Type2useEffect() {
  const [count, setCount] = useState(0);

  //   useeffect takes two args 1->callbackfun, 2->an empty array
  // type-2 requires both the args, and it runs only when the component renders,
  //    for the first time on the browser or by hard refresh

  useEffect(() => {
    console.log("useEffect is running -- Type-2");

    async function fakeProductData() {
      //   const response = await axios.get("https://fakestoreapi.com/products");
      //   console.log(response.data);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
    }

    fakeProductData();
  }, []);

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

export default Type2useEffect;
