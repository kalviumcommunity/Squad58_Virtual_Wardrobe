import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function SignUp() {
  return (
    <div id="containn">
      <div className="navv">
        <p id="virtual">Virtual Wardrobe</p>
      </div>

      <img src="clthh.jpeg" alt="" className="blahh" />

      <div className="input-conn">
        <h1 id="titlee">SIGN UP</h1>
        <label>Full Name</label>
        <input type="text" className="in" />
        <label>Email</label>
        <input type="text" className="in" />
        <label>Password</label>
        <input type="password" className="in" />
        <Link to="/">
          <button className="sub"> Submit</button>
        </Link>
      </div>
    </div>
  );
}
