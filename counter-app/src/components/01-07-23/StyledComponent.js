import React from "react";
import styled from "styled-components";

const StyledComponent = () => {
  const MyDiv = styled.div`
    color: red;
    font-size: 60px;
  `;

  return (
    <>
      <MyDiv>Santosh Chappidi</MyDiv>
    </>
  );
};

export default StyledComponent;
