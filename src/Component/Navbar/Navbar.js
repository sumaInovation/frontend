import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="con">
        <div className="destop-navbar">
          <div className="logo">
            <h3 className="logo-icon">&#9883;</h3>
            <h1>SUMAAUTOMATIONLK</h1>
          </div>
          <div className="desktop-nav-menu">
            <a href="#">HOME</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
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
          <a href="#">
            <label for="check" className="mobile-nav-item">
              HOME
            </label>
          </a>
          <a href="#">
            <label for="check" className="mobile-nav-item">
              Services
            </label>
          </a>
          <a href="#">
            <label for="check" className="mobile-nav-item">
              About
            </label>
          </a>
          <a href="#">
            <label for="check" className="mobile-nav-item">
              Contact
            </label>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
