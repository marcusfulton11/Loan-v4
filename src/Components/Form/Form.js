import  React, { useState } from "react";


export default function LoginForm() { //Creates function for login form
    const [purchasePrice, setPurchasePrice] = useState(""); //sets inital state of purchase price
    const [make, setMake] = useState(""); //same as above for make

    const [purchasePriceErr, setPurchasePriceErr] = useState({});
    const [makeErr, setMakeErr] = useState({});

    const handleSubmit = (e) => { // function to handle the submit button when clicked
        e.preventDefault(); // a preventDefault is called on the event when submitting the form to prevent the browser reload/refresh
        const isValid = formValidation();
        if(isValid){
            // move to acceptance page
        } else {
            // move to rejection page
        }
    }
  
    const formValidation = () =>{
        const purchasePriceErr = {};
        const makeErr = {};
        let isValid = true;
        
        if(purchasePrice.length > 10) {
            purchasePriceErr.highNumber = "Error Please enter valid purchase price"
            isValid = false;
        }

        if(make.length > 10) {
            makeErr.highLetterVal = "Error enter a valid make"
            isValid = false;
        }

        setPurchasePriceErr(purchasePrice);
        setMakeErr(make);
        return isValid;
    
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
        <label>Purchase Price</label>
        <input
          type="number"
          id="purchasePrice"
          placeholder="Purchase Price"
          value={purchasePrice}
          required
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
        </div>
        {Object.keys(purchasePriceErr).map((key)=>{
            return <div style={{color: "red"}}>{purchasePriceErr[key]}</div>
        })}
        {/* <p>{purchasePrice}</p> */}
        <br/>
        <div>
        <label>Make</label>
        <input
          type="text"
          id="make"
          placeholder="Make"
          value={make}
          required
          onChange={(e) => setMake(e.target.value)}
        />
        </div>
        <br/>
        {Object.keys(makeErr).map((key)=>{
            return <div style={{color: "red"}}>{makeErr[key]}</div>
        })}
        {/* <p>{make}</p> */}
        <button type="submit">Submit </button>
      </form>
    );
  } 