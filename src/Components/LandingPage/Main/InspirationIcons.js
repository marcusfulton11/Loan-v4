import React from 'react';
import {
    Flex,
    Icon,
    Box,
    Text,
  } from '@chakra-ui/react';
  import { BiCategory } from "react-icons/bi";
  import { FcNightLandscape } from "react-icons/fc";
  import { SiSquare } from "react-icons/si";
  import { RiTeamFill } from "react-icons/ri";
  import { FcCollaboration } from "react-icons/fc";
  import { GoRocket } from "react-icons/go";
  import { GoBriefcase } from "react-icons/go";
  import { CgDigitalocean } from "react-icons/cg";


const InspirationIcons= () =>{

    return ( 
        <Flex
        className="icons"
        position="absolute"
        marginTop="150vh"
        width="100%"
        fontSize="large" >
        <Box className="topLeft" marginLeft="17.5vw">
        <Icon as={BiCategory} color="#146681" />
        <Text>Integrity</Text>
        <Icon as={FcNightLandscape} color="#146681" marginTop="20vh" />
        <Text>Demonstrate</Text>
        </Box>

        <Box className="topRight" marginLeft="12.4vw">
        <Icon as={SiSquare} color="#146681" />
        <Text>Diversity</Text>
        <Icon as={RiTeamFill} color="#146681" marginTop="20vh" />
        <Text>Collaboration</Text>
        </Box>

        <Box className="bottomLeft" marginLeft="12.4vw">
        <Icon as={GoRocket} />
        <Text>Technology</Text>
        <Icon as={GoBriefcase} color="#146681" marginTop="20vh" />
        <Text>Corporate</Text>
        </Box>

        <Box className="bottomRight" marginLeft="12.4vw">
        <Icon as={FcCollaboration} color="#146681" />
        <Text>Teamwork</Text>
        <Icon as={CgDigitalocean} color="#146681" marginTop="20vh" />
        <Text>Digital</Text>
        </Box>
    </Flex>

    )
}

export default InspirationIcons;