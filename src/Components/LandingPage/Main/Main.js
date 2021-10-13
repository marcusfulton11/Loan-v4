import React from 'react';
import TopInfo from "./TopInfo";
import BottomInfo from "./BottomInfo";
import {
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';
import InspirationIcons from './InspirationIcons';

const Main= () =>{
  return (
    <Flex 
    flexDirection="column"
    // border="1px" 
    // borderColor="green.200"
    height="100vh">
<Box 
backgroundColor="#146681"
width={{ base: "100vw", md: "40px", lg: "50vw" }}
height={{ base: "80vw", md: "40px", lg: "40vw" }}
marginLeft="auto"
>
</Box>
<TopInfo />
    <Image 
    className="banknotes" 
    src={"banknotes.jpg"} 
    alt="banknotes"
    position="absolute"
    width={{ base: "60vw", md: "40px", lg: "50vw" }}
    height={{ base: "50vw", md: "40px", lg: "75vh" }}
    marginTop={{ base: "1vh", md: "40px", lg: "20vh" }}
    marginLeft={{ base: "40vw", md: "40px", lg: "40vw" }}
    opacity="55%"
     />
<BottomInfo />
<InspirationIcons />
    <Image 
    className="partners" 
    src={"partners.png"} 
    alt="partners"
    position="absolute"
    marginLeft="0"
    marginTop="200vh"
    width="100vw"
    
     />
    <Image
     className="fakelinks" 
     src={"fakelinks.png"} 
     alt="fakelinks"
     position="absolute"
     marginLeft="0"
     marginTop="265vh"
     width="100vw"
      />
 </Flex>
  );
}
export default Main;