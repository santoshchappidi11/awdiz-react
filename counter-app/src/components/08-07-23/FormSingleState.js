import React, { useState } from "react";
import "./../06-07-23/FormOne.css";
import { useNavigate } from "react-router-dom";

const FormSingleState = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const redirectToHome = useNavigate();

  function handleTheChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function submitTheData(e) {
    e.preventDefault();

    if (!userData.name) return alert("Please enter your name!");
    if (!userData.email) return alert("Please enter your email!");
    if (!userData.password) return alert("Please enter your password!");
    if (userData.password.length < 8)
      return alert("Password must be atleast 8 digits!");

    setUserData({
      name: "",
      email: "",
      password: "",
    });

    redirectToHome("/home");

    alert("Data submitted Successfully!");
  }

  return (
    <div id="form">
      <form onSubmit={submitTheData}>
        <label>Name :</label>
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleTheChange}
        />
        <br />
        <label>Email :</label>
        <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleTheChange}
        />
        <br />
        <label>Password :</label>
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleTheChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSingleState;
