import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginFunc() {
    setIsLoggedIn(true);
  }

  function logoutFunc() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <div >
        {isLoggedIn ? (
          <h1>You are Logged In!</h1>
        ) : (
          <h1>You are Logged Out!</h1>
        )}
      </div>
      <br />
      <button onClick={loginFunc}>Login</button>
      <button onClick={logoutFunc}>Logout</button>
    </div>
  );
}
export default Login;
