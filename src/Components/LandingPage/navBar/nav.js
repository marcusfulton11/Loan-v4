import React from 'react';
import {  Link } from "react-router-dom";
import "./nav.css";

const Navbar= () =>{
  return (
    <header>
    <img src={"MHFB.png"} alt="logo" />
  <div className="navi">
   <ul>
    <li>
    <Link to="/Contact">Contact</Link>
     </li>
    <li>
      <Link to="/LoanApp">Application</Link>
    </li>
    <li>
    <Link to="/">Home</Link>
    </li>
    </ul>
  </div>
  </header>
  );
}
export default Navbar;