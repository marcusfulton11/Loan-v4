import React from 'react';
import "./Main.css";
import {  Link } from "react-router-dom";

const Main= () =>{
  return (
    <main>
  <div>
<div className="blueSquare"></div>
  </div>
  <h1>Chase Your<br/>
     Dream With Us</h1>

     <p className="workHardTxt">The harder you work for something, the greater<br/>
     you'll feel when you achieve it</p>

     <Link to="/LoanApp" className="carLoanBtn">Car Loan</Link>
     <img className="sportCar" src={"sport-car.png"} alt="car" />

     <button className="fakeButton">Home Loan</button>
     <img className="house" src={"house.png"} alt="house" />

     <Link to="/LoanApp" className="applyOnline">Apply Online</Link>

  <div className="pic">
    <img className="banknotes" src={"banknotes.jpg"} alt="banknotes" />
 </div>
 <h2 className="custExp">Creating Extraordinary Customer Experience</h2>
 <p className="custTxt">Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Nullam bibendum
    eget morbi<br/> dignissim eu pharetra consequat montes, sagittis.</p>
    <img className="ethos" src={"ethos.png"} alt="ethos" />
    <img className="partners" src={"partners.png"} alt="partners" />
    <img className="fakelinks" src={"fakelinks.png"} alt="fakelinks" />
 </main>
  );
}
export default Main;