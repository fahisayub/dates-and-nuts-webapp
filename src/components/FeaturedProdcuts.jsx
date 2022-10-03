import { Box, Center, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const FeaturedProdcuts = () => {
    return (
        <Container maxW='full'  my='50px' p='20px' bg='brand.50' >
        <Heading size={['md','lg']} color='brand.800' >Featured Products</Heading>
        <Center>

        <Flex py='20px' gap='20px'maxW='full' flexDirection={['column','row']} overflow='scroll'>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.500' boxShadow='base'></Box>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.500' boxShadow='base'></Box>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.500' boxShadow='base'></Box>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.500' boxShadow='base'></Box>
        </Flex>
        </Center>

        </Container>
    );
};

export default FeaturedProdcuts;