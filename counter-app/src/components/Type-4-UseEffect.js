import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Type4useEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const navigateToLogin = useNavigate();

  function add() {
    setCount1((prevValue) => prevValue + 1);
  }

  function sub() {
    setCount2((prevValue) => prevValue - 1);
  }

  function addByTen() {
    setCount3((prevValue) => prevValue + 10);
  }

  function RedirectToLogin() {
    navigateToLogin("/login");
  }

  useEffect(() => {
    console.log("useEffect is Running! -- Type-4");
  }, [count1, count2]);

  return (
    <div>
      <h2>{"useEffect is Running, with Multiple Dependencies -- Type-4"}</h2>
      <h1>{count1}</h1>
      <button onClick={add}>+ Add</button>
      <h1>{count2}</h1>
      <button onClick={sub}>- Sub</button>
      <h1>{count3}</h1>
      <button onClick={addByTen}>+ Add by 10</button>
      <h1>Navigate To Login</h1>
      <button onClick={RedirectToLogin}>Redirect To Login</button>
    </div>
  );
}

export default Type4useEffect;
