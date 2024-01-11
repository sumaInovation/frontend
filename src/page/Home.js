import React from "react";
import "./Home.css";
import logo from "./picture/hero-img.png";
import plc from "./picture/plc.jpg";
import MC from "./picture/microcontroller.jpg";
import Online from "./picture/Online.jpg";
import Industrial from "./picture/Industrial.jpg";

const Home = () => {
  return (
    <>
     <div className="hero-section">
     
     <div className="Hero-img">
      <img src={logo}/>
     </div>
     <div className="Main-text">
      <h1>WELCOME</h1>
      </div>
      <div className="Sub-text">
      <p>We Are Counducting  PLC
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt impedit? 
     </p>
     </div>
    </div>
    <div className="content">
      <div className="PLC">PLC</div>
      <div className="PLC">PLC</div>
      <div className="PLC">PLC</div>
      <div className="PLC">PLC</div>
     </div>
    </>
  );
};

export default Home;
