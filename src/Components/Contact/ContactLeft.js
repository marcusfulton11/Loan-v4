import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
  } from '@chakra-ui/react';

const ContactLeft = () =>{
  return (
    <Flex
    //  border="1px"
    //  borderColor="green.200"
     backgroundColor="rgb(255,255,255, .1)"
     position="absolute"
     flexDirection="column"
     alignItems="center"
     width="30vw"
     height="70vh"
     marginTop="20vh"
     marginLeft="-42vw"
     borderRadius="3%">
          <Box></Box>
<Heading 
fontSize="1.5vw"
marginTop="5vh">Call us</Heading>
<Text 
fontSize="1.05vw"
marginTop="5vh"
marginLeft="5vw"
marginRight="5vw"
marginBottom="5vh"
>

  Call a member of our team to talk to us about your
   existing account or to find out more about our range
    of products and services.
  Alternatively, call us direct from your Mobile Banking app.
   As you're already securely logged in, there's no need to
    remember any passwords.</Text>
  <Button
  marginTop="19vh">Phone Number</Button>
    </Flex>

    );
}
export default ContactLeft;