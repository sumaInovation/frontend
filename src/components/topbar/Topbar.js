import { Link } from "react-router-dom";
import "./topbar.css";
import logo from 'mycorrectlogo.png'
export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/plc">
              PLC Programming
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/programming">
              C/C++ Programming
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Websocket
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              HTTP
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Socket IO
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/">
            <img
              className="topImg"
              src={logo}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">


          </ul>

        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
