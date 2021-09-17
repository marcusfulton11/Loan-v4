import  React, { useState } from "react";


export default function LoginForm() { //Creates function for login form
    const [purchasePrice, setPurchasePrice] = useState(""); //sets inital state of purchase price
    const [make, setMake] = useState(""); //same as above for make
    const [model, setModel] = useState("");
    const [yearlyIncome, setYearlyIncome] = useState({});
    const [creditScore, setCreditScore] = useState({});


    const [purchasePriceErr, setPurchasePriceErr] = useState(""); //sets inital state of purchase price
    const [makeErr, setMakeErr] = useState(""); //same as above for make
    const [modelErr, setModelErr] = useState("");
    const [yearlyIncomeErr, setYearlyIncomeErr] = useState({});
    const [creditScoreErr, setCreditScoreErr] = useState({});



    const handleSubmit = (e) => { // function to handle the submit button when clicked
        e.preventDefault(); // a preventDefault is called on the event when submitting the form to prevent the browser reload/refresh
        console.log(purchasePrice, make, model)
        const isValid = formValidation();
        if(purchasePrice > yearlyIncome / 5){
            alert("you dont make enough money")
        } else if(creditScore < 600) {
            alert("your credit sucks")
        }
    //     if(isValid){
    //         // move to acceptance page
    //     } else {
    //         // move to rejection page
    //     }
    }
  
    const formValidation = () =>{
        const purchasePriceErr = {};
        const makeErr = {};
        const modelErr = {};
        const yearlyIncomeErr = {};
        const creditScoreErr = {};
        let isValid = true;
        
        if(purchasePrice.trim().length < 1) {
            purchasePriceErr.priceEmpty = "Error field can't be empty"
            isValid = false;
        }

        if(purchasePrice.trim().length > 10) {
            purchasePriceErr.priceEmpty = "Error Price too much"
            isValid = false;
        }

        if(make.trim().length < 1) {
            makeErr.makeEmpty = "Error field can't be empty"
            isValid = false;
        }

        if(make.trim().length > 10) {
            makeErr.makeEmpty = "Error please enter valid make"
            isValid = false;
        }

        if(model.trim().length < 1) {
            modelErr.modelEmpty = "Error field can't be empty"
            isValid = false;
        }

        if(model.trim().length > 10) {
            modelErr.modelEmpty = "Error enter valid model"
            isValid = false;
        }

        if(yearlyIncome.trim().length < 1) {
            yearlyIncomeErr.yearlyIncomeEmpty = "Error field can't be empty"
            isValid = false;
        }

        if(yearlyIncome.trim().length > 10) {
            yearlyIncomeErr.yearlyIncomeEmpty = "Error yearly income too much"
            isValid = false;
        }

        if(creditScore.trim().length < 1) {
            creditScoreErr.creditScoreEmpty = "Error field can't be empty"
            isValid = false;
        }

        if(creditScore.trim().length > 3) {
            creditScoreErr.creditScoreEmpty = "Error credit score too high"
            isValid = false;
        }
    

        setPurchasePriceErr(purchasePriceErr);
        setMakeErr(makeErr);
        setModelErr(modelErr);
        setYearlyIncomeErr(yearlyIncomeErr);
        setCreditScoreErr(creditScoreErr)
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
        {Object.keys(makeErr).map((key)=>{
            return <div style={{color: "red"}}>{makeErr[key]}</div>
        })}
        {/* <p>{make}</p> */}
        <br/>
        <div>
        <label>Model</label>
        <input
          type="text"
          id="model"
          placeholder="Model"
          value={model}
          required
          onChange={(e) => setModel(e.target.value)}
        />
        </div>
        {Object.keys(modelErr).map((key)=>{
            return <div style={{color: "red"}}>{modelErr[key]}</div>
        })}
        {/* <p>{model}</p> */}
        <br/>
        <div>
        <label>Yearly Income</label>
        <input
          type="number"
          id="yearlyIncome"
          placeholder="Yearly income"
          value={yearlyIncome}
          required
          onChange={(e) => setYearlyIncome(e.target.value)}
        />
        </div>
        {Object.keys(yearlyIncomeErr).map((key)=>{
            return <div style={{color: "red"}}>{yearlyIncomeErr[key]}</div>
        })}
        {/* <p>{yearlyIncome}</p> */}
        <br/>
        <div>
        <label>Credit Score</label>
        <input
          type="number"
          id="creditScore"
          placeholder="Credit Score"
          value={creditScore}
          required
          onChange={(e) => setCreditScore(e.target.value)}
        />
        </div>
        {Object.keys(creditScoreErr).map((key)=>{
            return <div style={{color: "red"}}>{creditScoreErr[key]}</div>
        })}
        {/* <p>{creditScore}</p> */}
        <button type="submit">Submit </button>
      </form>
    );
  } 