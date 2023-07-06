import React from "react";

const Button = ({ children }) => {
  return <button>{children}</button>;
};

const ChildrenProps = () => {
  return (
    <div>
      <h2>Children Props has been passed!</h2>
      <Button>Login</Button>
    </div>
  );
};

export default ChildrenProps;
