import React, { useState } from "react";
import "./DynamicClasses.css";

const DynamicClasses = () => {
  const [isActiveButton, setIsActiveButton] = useState(false);

  function handleButtonClick() {
    setIsActiveButton(!isActiveButton);
  }

  return (
    <button
      className={isActiveButton ? "active-button" : "inactive-button"}
      onClick={handleButtonClick}
    >
      {isActiveButton ? "Active" : "Inactive"}
    </button>
  );
};

export default DynamicClasses;
