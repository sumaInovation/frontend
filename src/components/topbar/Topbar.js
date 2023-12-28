import { Link } from "react-router-dom";
import "./topbar.css";

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
              src="https://media.licdn.com/dms/image/D5603AQFas9BgRzUONQ/profile-displayphoto-shrink_200_200/0/1673965074160?e=2147483647&v=beta&t=a4DEoipQ85BvR2IhQXE8xYuEeDrB8QBnnpgfKbhxPSI"
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
