import { useState } from "react";
import qr from "../images/image-qr-code.png";
import "./main.css";

function App() {
  return (
    <div className="app">
      <div className="main">
        <img src={qr} className="img" />
        <p className="heading">
          improve your front-end skills by building projects
        </p>
        <p className="about">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
