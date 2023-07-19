import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "PAYLOAD":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const UseReducer = () => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    dispatch({ type: "DECREMENT" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  function payload() {
    dispatch({ type: "PAYLOAD", payload: 456 });
  }

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={payload}>Payload</button>
    </div>
  );
};

export default UseReducer;
