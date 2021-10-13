import React from 'react';
import {
    Flex,
    Heading,
    Text,
  } from '@chakra-ui/react';

const BottomInfo= () =>{
    return ( 
        <Flex

        flexDirection="column"
        position="absolute"
        width="100%"
        height="200vh"
        marginTop="115vh"
        alignItems="center"
        >
<Heading className="createHeader">Creating Extraordinary Customer Experience</Heading>
 <Text className="lorem" marginTop="10vh">Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Nullam bibendum
    eget morbi<br/> dignissim eu pharetra consequat montes, sagittis.</Text>
    </Flex>

    )
}

export default BottomInfo;