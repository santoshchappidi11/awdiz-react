import React from "react";

function MycomponentwithWrapper({ name }) {
  return (
    <div style={{ backgroundColor: "lightgrey", padding: "20px" }}>{name}</div>
  );
}

const Wrapper = () => {
  return <MycomponentwithWrapper name="Santosh Chappidi" />;
};

export default Wrapper;
