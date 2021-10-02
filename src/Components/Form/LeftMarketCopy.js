import React from 'react';
import {
    Flex,
    Heading,
    Text,
  } from '@chakra-ui/react';

const LeftMarketCopy= () =>{
    return ( 
        <Flex
         flexDirection="column"
         justifyContent="normal">
        {/* <img src={"sport-car.png"} alt="car" /> */}
        <Heading paddingTop="11vh" fontSize="1.3vw">Things to consider before buying a car</Heading>
        <Heading paddingTop="3.5vh" fontSize="0.9vw">Think about all the costs involved with your car</Heading>
        <Text paddingTop="8.5vh">It’s easy to focus on the car price,<br/>
             but you might also want to set aside some
              of your<br/> loan to get your car ready for the road.
              Keep in mind:<br/><br/>

            - The costs of any repairs that might be needed.<br/>   
            - The car running costs such as breakdown cover or MOT.<br/>
            - The costs of paperwork like car insurance or registration.</Text>
        </Flex>



    )

}

export default LeftMarketCopy;
