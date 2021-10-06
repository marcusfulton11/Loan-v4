import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react';
import { ImSad2 } from "react-icons/im";



function Rejection() {
  return (
    <Flex
    backgroundColor="rgb(255,255,255, .1)"
    position="absolute"
    flexDirection="column"
    alignItems="center"
    width="40vw"
    height="85vh"
    marginLeft="30vw"
    marginTop="10vh"
    paddingBottom="10vh"
    borderRadius="1%"
    >
      <Icon 
      as={ImSad2}
       w={20} h={20} 
       color="#ffcc33"
       marginTop="10vh" />
        <Heading fontSize="2.5vw">We're Really Sorry</Heading>

        <Heading fontSize="1.5vw">We cannot offer you finance Right now</Heading>
          <Text margin="3vw" fontSize="1vw">As a Responsible lender we want to make sure that
            you are able to easily repay the loan you applied for.
            Based on the information you provided us with we are 
            afraid you have been rejected this time round. Please try again in
            a few months time. </Text>
          <Heading fontSize="1.5vw">Most common reasons are</Heading>
          <Text fontSize="1vw">- Low credit score.<br/>
                - Low income compared to loan amount.<br/>
                - Have to many loans open at the moment.
          </Text>
          <Text margin="3vw" fontSize="1vw">
            We would like to offer you a loan in the future, so do not
            hesitate to contact us again after a while. 
          </Text>
    </Flex>

  );
}

export default Rejection;
