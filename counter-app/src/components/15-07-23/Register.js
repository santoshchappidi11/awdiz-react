import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    // cart: [],
  });

  const navigateTo = useNavigate();

  function handleChangeValues(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  }

  function SubmitTheUserDetails(e) {
    e.preventDefault();

    if (userDetails.name && userDetails.email && userDetails.password) {
      const usersData = JSON.parse(localStorage.getItem("users")) || [];

      if (usersData.length) {
        for (let i = 0; i < usersData.length; i++) {
          if (userDetails.email == usersData[i].email) {
            setUserDetails({
              name: "",
              email: "",
              password: "",
            });
            return alert("This email already exists, please try another!");
          }
        }
      }

      const userSingleObject = {
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
        cart: [],
      };

      usersData.push(userSingleObject);

      localStorage.setItem("users", JSON.stringify(usersData));

      alert("Registered successfully!");
      setUserDetails({
        name: "",
        email: "",
        password: "",
      });
      navigateTo("/login");
    } else {
      return alert("Please fill all the details!");
    }
  }

  return (
    <div id="register">
      <form onSubmit={SubmitTheUserDetails}>
        <div className="fields">
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChangeValues}
          />
        </div>
        <br />
        <div className="fields">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChangeValues}
          />
        </div>
        <br />
        <div className="fields">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChangeValues}
          />
        </div>
        <br />
        <button type="submit">Register</button>
        <div className="login-here" onClick={() => navigateTo("/login")}>
          <p>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
