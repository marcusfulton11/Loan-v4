import React from 'react';
import "./Contact.css";

const Contact = () =>{
  return (
    <div>   
<h1 className="contactHeading">Contact us</h1>

<div className="callUs">
  <div className="line"></div>
<h2 className="call">Call us</h2>
<p className="callTxt">
  Call a member of our team to talk to us about your
   existing account or to find out more about our range
    of products and services.
  Alternatively, call us direct from your Mobile Banking app.
   As you're already securely logged in, there's no need to
    remember any passwords.</p>
  <button className="callBtn">Phone Number</button>
</div>

<div className="branch">
  <div className="line2"></div>
<h2 className="visit">Visit Us In Branch</h2>
<p className="visitTxt">
The safest way to bank with us right now is from home,
 either using our app or through Internet Banking. 
 If you do need to visit us in branch, 
 please check our latest opening hours before you visit.
To protect you and our staff,
 we’ve put social distancing measures in place in our branches
  so you can bank with us safely.
   You'll also be asked to wear a face covering.
    When you visit, we may ask you to wait outside if it’s busy
   and things may take a little more time to complete,
    but we’ll help you as quickly as we can, so please bear with us.
You can also do your everyday banking at your local Post Office. 
You can check your balance, make withdrawals and pay cash<br/> or cheques
 into your current account at Post Office counters. 
 Make sure you check their website for<br/> up-to-date
  information about opening hours.</p>
  <button className="visitBtn">Find Branch</button>
</div>

<div className="messageUs">
  <div className="line3"></div>
<h2 className="message">Give us a Message</h2>
<p className="messageTxt">
We’re happy to help with any general queries,
 so please get in touch through our social
  channels below. We’re sorry but we are unable
   to answer any account specific questions.</p>
  <button className="twitterBtn">Twitter</button>
  <button className="fbBtn">Facebook</button>
</div>
<div className="bottom"></div>
    </div>
  );
}
export default Contact;
