import React from "react";

const Map = (props) => {
  console.log(props.myName, " - UserName");
  console.log(props.myUsers);
  return (
    <div>
      {props.studentList &&
        props.studentList.map((str) => (
          <div key={str}>
            <h2>{str}</h2>
          </div>
        ))}
      <button onClick={() => props.setMyUsers([...props.myUsers, "Awdiz"])}>
        Add New User
      </button>
      <h1>{props.myName && props.myName}</h1>
    </div>
  );
};

export default Map;
