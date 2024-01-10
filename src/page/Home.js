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
        <div className="main-text">
          <h1>WELCOM TO SUMAAUTOMATIONLK</h1>
        </div>
        <div className="sub-text">
          <p style={{ color: "white" }}>
         Let Start Best Experiance On Industrial Automation communinty
            <a href="#">Read More</a>
            <a
              href="/About"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Contact Us
            </a>
          </p>
        </div>
        <div className="icon">
          <img src={logo} />
        </div>
      </div>
      <br/>
      <div className="Main-section">
        
        <div className="grid11">
          <img src={plc}/>
        </div>
        <div className="grid12">
          <img src={MC}/>
        </div>
        <div className="grid21">
          <img src={Online} style={{width:"739px", height:"390px"}}/>
        </div>
        <div className="grid22">
        <img src={Industrial} style={{width:"739px", height:"390px"}}/>
        </div>
      </div>
    </>
  );
};

export default Home;
