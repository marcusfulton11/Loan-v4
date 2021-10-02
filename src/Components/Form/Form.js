import  React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button, 
    Img,
  } from '@chakra-ui/react';
import LeftMarketCopy from "./LeftMarketCopy";
import RightMarketCopy from "./RightMarketCopy";



export default function LoanApp() { //Creates function for login form
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

    let history = useHistory();

    const handleSubmit = (e) => { // function to handle the submit button when clicked
        e.preventDefault(); // a preventDefault is called on the event when submitting the form to prevent the browser reload/refresh
        console.log(creditScore < 600)
        formValidation();
        if(purchasePrice > yearlyIncome / 5){
           history.push("/Rejection")
        } else if(creditScore > 600) {
            console.log("Made it past score check")
           history.push("/SignUp")
        }
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
        <Flex 
        justifyContent="center">
            <Img 
            src={"sport-car.png"} 
            alt="car" 
            position="absolute"
            marginTop="1vh"
            marginRight="6vw"
            width="60vw"
            opacity="0.02"
            zIndex="-2" />
        <LeftMarketCopy />
       <Flex width="33vw" align="center" justifyContent="center">
       <Box p={100}  backgroundColor="rgb(255,255,255, .1)" borderRadius="1%">
        <Box textAlign="center"></Box>
      <Heading>Loan Application</Heading>
      <br/>
      <form onSubmit={handleSubmit}>
          <FormControl>
        <div>
        <FormLabel>Purchase Price</FormLabel>
        <Input
          type="number"
          id="purchasePrice"
          placeholder="Purchase Price"
          value={purchasePrice}
        //   required
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
        </div>
        {Object.keys(purchasePriceErr).map((key)=>{
            return <div style={{color: "red"}}>{purchasePriceErr[key]}</div>
        })}
        {/* <p>{purchasePrice}</p> */}
        <br/>
        <div>
        <FormLabel>Make</FormLabel>
        <Input
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
        <FormLabel>Model</FormLabel>
        <Input
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
        <FormLabel>Yearly Income</FormLabel>
        <Input
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
        <FormLabel>Credit Score</FormLabel>
        <Input
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
    <br/>
        <Button type="submit">Submit </Button>
        </FormControl>
      </form>
      </Box>
      </Flex>
      <RightMarketCopy />
      </Flex>
    );
  } 
