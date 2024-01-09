import { Outlet, Link } from "react-router-dom";
import './Layout.css'
const Layout = () => {
  return (
    <>
    <div className="con">
        <div className="destop-navbar">
          <div className="logo">
            <h3 className="logo-icon">&#9883;</h3>
            <h3>SUMAAUTOMATIONLK</h3>
          </div>
          <div className="desktop-nav-menu">
            <Link to="/">HOME</Link>
            <Link to="/Services">Services</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
          <label for="check" className="tt">
            &#9776;
          </label>
        </div>
        <input type="checkbox" id="check" ></input>

        <div id="mySidenav" class="sidenav">
          <label for="check" className="ss" >
            &#9747;
          </label>
            <Link to="/" className="mobile-nav-item">HOME</Link>
            <Link to="/Services" className="mobile-nav-item">Services</Link>
            <Link to="/About" className="mobile-nav-item">About</Link>
            <Link to="/Contact" className="mobile-nav-item">Contact</Link>
        </div>
      </div>






          

      <Outlet />
    </>
  )
};

export default Layout;