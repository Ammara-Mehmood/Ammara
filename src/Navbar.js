import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './index.css';
import  './bootstrap.min.css'

function Navbar() {
  const [data,setdata]=useState(true)
    return <div>
    <nav className="navbar navbar-expand-lg navbar-light  nav-color">
    <div className="m-auto">
    <button className="navbar-toggler border brder-info text-info" onClick={()=>{setdata(!data)}}>
    {data? <MenuIcon/>:<CloseIcon/>}
    </button>
    <div className="row ">
    <div className={data ? "collapse navbar-collapse":"collapse navbar-collapse active"}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to='/home' className="nav-link" >Home </Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link">About </Link>
        </li>
        <li className="nav-item">
       <Link to='/contact' className="nav-link">Contact Us </Link>
      </li>
      <li className="nav-item">
      <Link to='/login' className="nav-link">Login</Link>
    </li>
      </ul>
    </div>
    </div>
    </div>
  </nav>


    </div>;
}

export default Navbar;
