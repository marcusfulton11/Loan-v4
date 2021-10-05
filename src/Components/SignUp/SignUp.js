import  React from "react";
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
    <Flex
    width="99.9vw"
    height="80vh"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    position="absolute">
    <Box p={70}  backgroundColor="rgb(255,255,255, .1)" borderRadius="1%">
    <Heading marginBottom="5vh">Sign Up</Heading>
    <form>
    <FormControl> 
     <Box>
       <FormLabel>Email address</FormLabel>
        <Input type="email"  
               name="email" 
               placeholder="Enter email"
              //  value={email}
        />
       </Box>
      <Box>
         <FormLabel>Password</FormLabel>
          <Input type="password"
                 name="password" 
                 placeholder="Password"
                //  value={password}
        />
        </Box>
      <Box>
          <FormLabel>Confirm Password</FormLabel>
           <Input type="password"  
                  id="confirmPassword" 
                  placeholder="Confirm Password"
                  // value={confirmPassword}
        />
      </Box>
        <Button 
           marginTop="5vh"
           type="submit" 
                >
            Register
                </Button>
            </FormControl>
            </form>
            </Box>
            </Flex>
  );
}