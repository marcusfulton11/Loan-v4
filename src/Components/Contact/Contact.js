import React from 'react';
import "./Contact.css";
import {
  Flex,
  Heading,
} from '@chakra-ui/react';
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import ContactBottom from "./ContactBottom";


const Contact = () =>{
  return (
    <Flex justifyContent="center">   
<Heading
>Contact us</Heading>
<ContactLeft />
<ContactRight />
<ContactBottom />
    </Flex>
  )
}
export default Contact;
