import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const navigateTo = useNavigate();

  function handleChangeValues(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  }

  function submitTheUserDetails(e) {
    e.preventDefault();

    if (userDetails.email && userDetails.password) {
      const userData = JSON.parse(localStorage.getItem("users")) || [];

      var flag = false;
      for (let i = 0; i < userData.length; i++) {
        if (
          userData[i].email == userDetails.email &&
          userData[i].password == userDetails.password
        ) {
          flag = true;
          alert("Logged In Sucessfully!");
          navigateTo("/home");
          login(userDetails);
          // localStorage.setItem("current-user", JSON.stringify(userDetails));
        }
      }

      if (flag == false) {
        setUserDetails({ email: "", password: "" });
        alert("Invalid email or Password");
      }
    } else {
      return alert("Please fill all the details!");
    }
  }

  return (
    <div id="login">
      <form onSubmit={submitTheUserDetails}>
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
        <button type="submit">Login</button>
        <div className="register-here" onClick={() => navigateTo("/register")}>
          <p>
            Don't have an account? <span>Register Here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
