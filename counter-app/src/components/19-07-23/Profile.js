import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { AuthContext } from "../../context/Auth.context";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { state, login } = useContext(AuthContext);
  const navigateTo = useNavigate();
  const [userValues, setUserValues] = useState({ name: "", password: "" });
  //   console.log(userValues);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    const usersDetails = JSON.parse(localStorage.getItem("users"));

    if (currentUser) {
      for (let i = 0; i < usersDetails.length; i++) {
        if (
          usersDetails[i].email == currentUser.email &&
          usersDetails[i].password == currentUser.password
        ) {
          setUserValues(usersDetails[i]);
        }
      }
    }
  }, []);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    // const usersDetails = JSON.parse(localStorage.getItem("users"));
    if (!currentUser) {
      navigateTo("/login");
    }
  }, [state, navigateTo]);

  function handleChangeValues(e) {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  }

  function submitTheUserDetails(e) {
    e.preventDefault();

    if (userValues.name && userValues.password) {
      const usersDetails = JSON.parse(localStorage.getItem("users"));
      const currentUser = JSON.parse(localStorage.getItem("current-user"));
      if (currentUser) {
        for (let i = 0; i < usersDetails.length; i++) {
          if (
            usersDetails[i].email == currentUser.email &&
            usersDetails[i].password == currentUser.password
          ) {
            usersDetails[i].name = userValues.name;
            usersDetails[i].password = userValues.password;
            currentUser.password = userValues.password;
          }
        }
      }
      localStorage.setItem("users", JSON.stringify(usersDetails));
      localStorage.setItem("current-user", JSON.stringify(currentUser));
      login(currentUser);
      setUserValues({ name: "", password: "" });
      alert("Profile updated!");
    } else {
      alert("Please fill all the details!");
    }
  }

  return (
    <div id="profile-main">
      <form onSubmit={submitTheUserDetails}>
        <div id="profile-header">
          <h3>Profile</h3>
        </div>
        <div className="fields">
          <label>Change Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChangeValues}
            value={userValues.name}
          />
        </div>
        <br />
        <div className="fields">
          <label>Change Password:</label>
          <input
            type="text"
            name="password"
            onChange={handleChangeValues}
            value={userValues.password}
          />
        </div>
        <br />
        <button type="submit">Change Details</button>
      </form>
    </div>
  );
};

export default Profile;
