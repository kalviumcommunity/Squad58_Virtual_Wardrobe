import React from "react";
import "./YourCloset.css";

export default function YourCloset() {
  return (
    <div>
      <div className="narrow">
        <input type="text" className="inn" placeholder="Search..." />
        <div className="search-icon">
          <img src="search.png" />
        </div>
        <div id="circle">
          <img src="camera.png" alt="" id="camera" />
        </div>
      </div>
      <div className="banner"></div>
      <h1 id="haha">Your clothes</h1>

      <div className="grid">
        <div>
          <img src="tshirt.jpeg" alt="" className="shirt" />
          <div className="boxx">
            <p id="textp">Hoodie</p>
            <p id="textpp">Uplaoded on 12th May</p>
          </div>
        </div>

        <div>
          <img src="tshirt2.jpeg" alt="" className="shirt" />
          <div className="boxx">
            <p id="textp">Hoodie</p>
            <p id="textpp">Uplaoded on 12th May</p>
          </div>
        </div>

        <div>
          <img src="tshirt.jpeg" alt="" className="shirt" />
          <div className="boxx">
            <p id="textp">Hoodie</p>
            <p id="textpp">Uplaoded on 12th May</p>
          </div>
        </div>

        <div>
          <img src="tshirt2.jpeg" alt="" className="shirt" />
          <div className="boxx">
            <p id="textp">Hoodie</p>
            <p id="textpp">Uplaoded on 12th May</p>
          </div>
        </div>
      </div>
    </div>
  );
}
