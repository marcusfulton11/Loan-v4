import React from 'react';
import {  Link } from "react-router-dom";
import { AiOutlineCar } from "@react-icons/all-files/ai/AiOutlineCar";
import {
    Flex,
    Heading,
    Text,
    Box,
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
        marginLeft="7vw">
              <Heading fontSize="4vw">Chase Your<br/>
     Dream With Us</Heading>

     <Text
    //   border="1px" 
    //   borderColor="green.200"
      marginTop="5vh">The harder you work for something, the greater<br/>
     you'll feel when you achieve it</Text>
     <Link to="/LoanApp">
     <Button 
     size="lg"
     leftIcon={<AiOutlineCar />}
     marginTop="10vh"
         >Apply Online</Button>
    </Link>
</Flex>

    )
}

export default TopInfo;