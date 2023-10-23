import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function New() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Menu</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">Action1</Link>
          <Link className="dropdown-item" to="#">Action2</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/about">About</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#">Disabled</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<Outlet/>
</>
      
    
      )
    }
    
    export default New