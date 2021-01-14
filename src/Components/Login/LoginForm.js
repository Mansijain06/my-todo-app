import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm(props) {
  const [loginOrSignUp, setLoginOrSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-heading">{loginOrSignUp ? "Login" : "SignUp"}</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {props.error ? <div className="error">{props.error}</div> : null}
        {loginOrSignUp ? (
          <button onClick={() => props.loginHandler(username, password)}>
            Log In
          </button>
        ) : (
          <button onClick={() => props.signupHandler(username, password)}>
            Sign Up
          </button>
        )}
        {loginOrSignUp ? (
          <a onClick={() => setLoginOrSignUp(false)}>Don't have account ?</a>
        ) : (
          <a onClick={() => setLoginOrSignUp(true)}>Back to login ?</a>
        )}
      </div>
    </div>
  );
}
