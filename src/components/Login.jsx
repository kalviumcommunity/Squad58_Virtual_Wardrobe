import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="contain">
      <div className="nav">
        <Link to="/" className="text">
          <p>Home</p>
        </Link>

        <Link to="/SignUp" className="text">
          <p>Sign Up</p>
        </Link>
      </div>

      <img src="cloth.jpeg" alt="" className="blah" />
      <h1 id="title">LOG IN</h1>

      <div className="input-con">
        <label>Email</label>
        <input type="text" className="in" />
        <label>Password</label>
        <input type="password" className="in" />
        <button> Submit</button>
      </div>
    </div>
  );
}
