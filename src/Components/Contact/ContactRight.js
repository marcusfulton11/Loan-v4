import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
  } from '@chakra-ui/react';


const ContactRight = () =>{
  return (
    <Flex
    // border="1px"
    // borderColor="green.200"
    backgroundColor="rgb(255,255,255, .1)"
    position="absolute"
    flexDirection="column"
    alignItems="center"
    width="30vw"
    height="70vh"
    marginTop="20vh"
    marginLeft="42vw"
    borderRadius="3%">
         <Box></Box>
<Heading 
fontSize="1.5vw"
marginTop="5vh">Visit Us In Branch</Heading>
<Text
fontSize="1.05vw"
marginTop="5vh"
marginLeft="5vw"
marginRight="5vw"
marginBottom="5vh"
>
The safest way to bank with us right now is from home,
 either using our app or through Internet Banking. 
 If you do need to visit us in branch, 
 please check our latest opening hours before you visit.
You can also do your everyday banking at your local Post Office. 
You can check your balance, make withdrawals and pay cash<br/> or cheques
 into your current account at Post Office counters. 
 Make sure you check their website for<br/> up-to-date
  information about opening hours.</Text>
  <Button>Find Branch</Button>
    </Flex>

    );
}
export default ContactRight;