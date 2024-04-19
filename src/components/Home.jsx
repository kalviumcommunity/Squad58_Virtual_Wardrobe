import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <p className="text">Home</p>
          <Link to="/Main" className="text">
            <p>Closet</p>
          </Link>

          <Link to="/LogIn" className="text">
            <p>Log In</p>
          </Link>
          <Link to="/SignUp" className="text">
            <p>Sign Up</p>
          </Link>
        </div>
        <div className="containerr">
          <h1 className="match">
            Match your <br /> Outfits
          </h1>

          <Link to="/Main" className="btn">
            Let's get started
          </Link>

          <img src="poster.jpeg" alt="" className="poster" />
          <img src="bg.jpeg" alt="" className="ahmor" />
          <img src="mainn.jpeg" alt="" className="main" />
        </div>
        <div className="section">
          <h1>Virtual Wardrobe</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
