import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const RenderTodos = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["apple", "mango", "pineapple"]);

  const addTodo = useCallback(() => {
    setTodos([...todos, "New fruit Grapes added.."]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((prevValue) => prevValue + 1)}>
        Add by + 1
      </button>
    </div>
  );
};

export default RenderTodos;
