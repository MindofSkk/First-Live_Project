import {
    Box,
    Container,
    Stack,
    Text,
  
    useColorModeValue,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
  export  const Fotter=() =>{
    return (
      <Box
        bg={'orangered'}
        color={"white"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Link to='/'>Home</Link>
            <Link to="/login">Admin</Link>
            <Link to='/form'>Registration</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
          <Text>© 2023 Design By Sachin Kumar Keshri & Kundan Kumar Keshri . All rights reserved</Text>
        </Container>
      </Box>
    );
  }