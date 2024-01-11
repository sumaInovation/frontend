import React from "react";
import "./Home.css";
import logo from "./picture/banner-transformed.jpeg";
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
    </div>
    <div className="content">
      <div className="PLC">
        <h1>PLC Programming</h1>
      <img src={plc}/>
      </div>
      <div className="C">
      <h1>Robotics Courses</h1>
      <img src={MC }/>
      </div>
      <div className="Online">
      <h1>Our Online Courses</h1>
      <img src={MC}/>
      </div>
      <div className="Workshop">
      <h1>Industrial Workshop</h1>
      <img src={Industrial}/>
      </div>
     </div>
    </>
  );
};

export default Home;
