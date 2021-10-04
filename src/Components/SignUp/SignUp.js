import  React from "react";


 

export default function SignUp() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  // const [emailErr, setEmailErr] = useState("");
  // const [passwordErr, setPasswordErr] = useState("");
  // const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  return (
    <form> 
     <div>
       <label>Email address</label>
        <input type="email"  
               name="email" 
               placeholder="Enter email"
              //  value={email}
        />
       </div>
      <div>
         <label>Password</label>
          <input type="password"
                 name="password" 
                 placeholder="Password"
                //  value={password}
        />
        </div>
      <div>
          <label>Confirm Password</label>
           <input type="password"  
                  id="confirmPassword" 
                  placeholder="Confirm Password"
                  // value={confirmPassword}
        />
      </div>
        <button 
           type="submit" 
                >
            Register.
                </button>
            </form>
  );
}