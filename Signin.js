import React from "react";
import { BsNewspaper } from "react-icons/bs";
import backgroundVideo from './video.mp4';
import './Signin.css';

function Signin() {
  return (
    <div className="signin">
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="signin-form">
        <div className="logo-container">
          <BsNewspaper className="page-icon" />
          <h1>Sign in</h1>
        </div>
        <div className="input-container">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="button-container">
          <button>Sign In</button>
        </div>
      </div>
      <div className="footer-text">
        © 2023 CyberHunter. All rights reserved.
      </div>
    </div>
  );
}

export default Signin;
  