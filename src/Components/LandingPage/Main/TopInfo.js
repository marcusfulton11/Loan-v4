import React from 'react';
import {  Link } from "react-router-dom";
import { AiOutlineCar } from "@react-icons/all-files/ai/AiOutlineCar";
import {
    Flex,
    Heading,
    Text,
    Button,
  } from '@chakra-ui/react';

const TopInfo= () =>{
    return ( 
        <Flex    
        // border="1px" 
        // borderColor="green.200"
        flexDirection="column"
        position="absolute"
        marginTop="19vh"
        marginLeft={{ base: "2vw", md: "40px", lg: "7vw" }}>
              <Heading fontSize={{ base: "5vw", md: "40px", lg: "4vw" }}>Chase Your<br/>
     Dream With Us</Heading>

     <Text
    //   border="1px" 
    //   borderColor="green.200"
      marginTop={{ base: "7vh", md: "40px", lg: "5vh" }}>The harder you work for something, the greater<br/>
     you'll feel when you achieve it</Text>
     <Link to="/LoanApp">
     <Button
     size="lg"
     leftIcon={<AiOutlineCar />}
     marginTop={{ base: "15vh", md: "40px", lg: "10vh" }}
     marginLeft={{ base: "25vw", md: "0vw", lg: "0vw" }}
         >Apply Online</Button>
    </Link>
</Flex>

    )
}

export default TopInfo;