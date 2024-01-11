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

      <div className="plc">
      <img src={logo}/>
      </div>
      <div className="c">
      <img src={logo}/>
      </div>
      <div className="online">
      <img src={logo}/>
      </div>
      <div className="workshop">
      <img src={logo}/>
      </div>
     </div>
     
    </>
  );
};

export default Home;
