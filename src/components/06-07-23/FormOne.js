import React, { useState } from "react";
import "./FormOne.css";

const FormOne = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(userName, "- Name");
  console.log(userEmail, "- Email");
  console.log(userPassword, "- Password");

  function checkUserName(e) {
    setUserName(e.target.value);
  }

  function checkUserEmail(e) {
    setUserEmail(e.target.value);
  }

  function checkUserPassword(e) {
    setUserPassword(e.target.value);
  }

  function onFormOneSubmit(e) {
    e.preventDefault();

    if (userName === "") {
      return alert("Please Enter Your Name!");
    }

    if (userName.length < 5) {
      return alert("Name should be atleast 6 characters! ");
    }

    if (userEmail === "") {
      return alert("Please Enter Your Email!");
    }

    if (userPassword === "") {
      return alert("Please Enter Your Password!");
    }

    if (userPassword.length < 8) {
      return alert("Password should be atleast 8 characters! ");
    }

    const res = { data: { message: "ok", status: 200 } };

    if (res.data.message === "ok") {
      alert("Form Submitted Sucessfully!");
    } else {
      alert("Internal Error, Please try again after some time...");
    }
  }

  return (
    <div id="form">
      <form onSubmit={onFormOneSubmit}>
        <label>Name : </label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          onChange={checkUserName}
        />
        <br />
        <label>Email : </label>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={checkUserEmail}
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={checkUserPassword}
        />
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default FormOne;
