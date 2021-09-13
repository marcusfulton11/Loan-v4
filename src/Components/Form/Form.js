import  React, { useState } from "react";


export default function LoginForm() {
    const [purchasePrice, setPurchasePrice] = useState("");
    const [make, setMake] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(purchasePrice, make)
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
        <p>{purchasePrice}</p>
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
        <p>{make}</p>
        <button type="submit">Submit </button>
      </form>
    );
  }