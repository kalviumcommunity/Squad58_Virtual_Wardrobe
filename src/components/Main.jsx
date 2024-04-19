import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="contain">
      <div className="nav">
        <Link to="/" className="text">
          <p>Home</p>
        </Link>
        <Link to="/YourCloset" className="text">
          <p>Your Closet</p>
        </Link>
        <Link to="/SignUp" className="text">
          <p>Profile</p>
        </Link>
      </div>
      <img src="hood.jpeg" alt="" className="hood" />
      <img src="hoodi.jpeg" alt="" className="hoodi" />

      <div id="next">Match</div>
    </div>
  );
}
