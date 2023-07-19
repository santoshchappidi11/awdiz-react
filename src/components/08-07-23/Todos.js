import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  return (
    <div>
      <h3>My Todos</h3>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);
