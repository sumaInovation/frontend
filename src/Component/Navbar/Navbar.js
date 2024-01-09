import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="con">
        <div className="destop-navbar">
          <div className="logo">
            <h3 className="logo-icon">&#9883;</h3>
            <h3>SUMAAUTOMATIONLK</h3>
          </div>
          <div className="desktop-nav-menu">
            <a href="/">HOME</a>
            <a href="/Services">Services</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
          </div>
          <label for="check" className="tt">
            &#9776;
          </label>
        </div>
        <input type="checkbox" id="check"></input>

        <div id="mySidenav" class="sidenav">
          <label for="check" className="ss">
            &#9747;
          </label>
            <a href="/" className="mobile-nav-item "  >HOME</a>
            <a href="/Services" className="mobile-nav-item">Services</a>
            <a href="/About" className="mobile-nav-item">About</a>
            <a href="/Contact" className="mobile-nav-item">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
