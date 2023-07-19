import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["apple", "Mango", "Watermelon"]);

  function addTodo() {
    setTodos([...todos, "Grapes"]);
  }

  const Number = useMemo(() => {
    return expensiveCalculations(counter);
  }, [counter]);

  return (
    <div>
      <h1>Expensive Calculations: {Number}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter((prevValue) => prevValue + 1)}>
        Add +
      </button>
      {todos.map((todo, i) => (
        <h3 key={i}>{todo}</h3>
      ))}
      <button onClick={addTodo}>Add new Todo</button>
    </div>
  );
};

const expensiveCalculations = (number) => {
  console.log("Inside Expensive Calculations...");
  for (let i = 0; i <= 10000000; i++) {
    number = number + 1;
  }
  return number;
};

export default UseMemo;
