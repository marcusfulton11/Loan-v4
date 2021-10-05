import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Icon
  } from '@chakra-ui/react';
  import { GrFacebook } from "react-icons/gr";
  import { AiFillTwitterSquare } from "react-icons/ai";


const ContactBottom = () =>{
  return (
    <Flex
    // border="1px"
    // borderColor="green.200"
    backgroundColor="rgb(255,255,255, .1)"
    position="absolute"
    flexDirection="column"
    alignItems="center"
    width="72vw"
    height="50vh"
    marginTop="105.5vh"
    paddingBottom="10vh"
    borderRadius="1%">
          <Box></Box>
<Heading 
fontSize="1.5vw"
marginTop="5vh">Give us a Message</Heading>
<Text
fontSize="1.05vw"
marginTop="5vh"
marginLeft="5vw"
marginRight="5vw"
marginBottom="5vh">
We’re happy to help with any general queries,
 so please get in touch through our social
  channels below.<br/> We’re sorry but we are unable
   to answer any account specific questions.</Text>
   <Box>
  <Button 
  variant="ghost">
      <Icon as={GrFacebook} color="#146681" />
  </Button>
  <Button 
  variant="ghost"
  size="lg">
      <Icon as={AiFillTwitterSquare} color="#146681" />
  </Button>
  </Box>
    </Flex>

    );
}
export default ContactBottom;