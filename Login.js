import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import backgroundVideo from './video.mp4';
import './Login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="login-form">
        <div className="logo-container">
          <BsNewspaper className="page-icon" />
          <h1>Login</h1>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      <div className="footer-text">
      © 2023 CyberHunter. All rights reserved.
      </div>
    </div>
  );
}

export default Login;
