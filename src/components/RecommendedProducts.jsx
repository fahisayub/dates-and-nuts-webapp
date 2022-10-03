import React from 'react';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';


const RecommendedProducts = () => {
    return (
        <Container maxW='full'  my='50px' p='20px' bg='brand.50' >
        <Heading size={['md','lg']} color='brand.800' >Recommended for you</Heading>
        <Flex px={['20px','50px']}py='20px' gap='20px' flexDirection={['column','row']}>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.600' boxShadow='base'></Box>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.600' boxShadow='base'></Box>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.600' boxShadow='base'></Box>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.600' boxShadow='base'></Box>
            <Box h='300px' w='250px' borderRadius='10px' bg='brand.600' boxShadow='base'></Box>
        </Flex>

        </Container>
    );
};

export default RecommendedProducts;