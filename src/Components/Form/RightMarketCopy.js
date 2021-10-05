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
        <Heading paddingTop="11vh" fontSize="1.3vw">First, you can apply online if you:</Heading>
        <Text paddingTop="15vh">
            - Are 18+ and a UK resident with a<br/> MHF Bank current account (held for 3+ months).<br/>
            - Have not been declared bankrupt in the last 6 years<br/>
            - Have not applied for a personal loan with us<br/> within the last 28 days</Text>
        <Text
        fontWeight="bold"
        textDecoration="underline">
        <Link to="/Contact" className="info">For More Info Click Here </Link>
        </Text>
        </Flex>



    )

}

export default RightMarketCopy;
