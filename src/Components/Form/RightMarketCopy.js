import React from 'react';
import {  Link } from "react-router-dom";
import {
    Flex,
    Heading,
    Text,
  } from '@chakra-ui/react';


const RightMarketCopy= () =>{
    return ( 
        <Flex

        flexDirection="column"
        justifyContent="normal">
        <Heading fontSize={{ base: "0vw", md: "0vw", lg: "1.8vw" }} paddingTop="11vh">First, you can apply online if you:</Heading>
        <Text fontSize={{ base: "0vw", md: "0vw", lg: "1vw" }} paddingTop="15vh">
            - Are 18+ and a UK resident with a<br/> MHF Bank current account (held for 3+ months).<br/>
            - Have not been declared bankrupt in the last 6 years<br/>
            - Have not applied for a personal loan with us<br/> within the last 28 days</Text>
        <Text
        fontSize={{ base: "0vw", md: "0vw", lg: "1vw" }}
        fontWeight="bold"
        textDecoration="underline">
        <Link to="/Contact" className="info">For More Info Click Here </Link>
        </Text>
        </Flex>



    )

}

export default RightMarketCopy;
