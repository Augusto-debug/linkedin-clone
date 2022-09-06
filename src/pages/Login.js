import React from "react";
import "./Login.css";

function Login() {
  const register = () => {};

  const loginToApp = () => {};

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_LR0Vks"
        alt="linkedin"
      />

      <form className="login_form">
        <input type="text" placeholder="Full Name (required if registering)" />
        <input type="text" placeholder="Profile Pic Url (Optional)" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login_register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
