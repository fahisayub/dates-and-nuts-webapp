import React, { useEffect } from 'react';
import { Box, Button, Center, Container, Flex, Heading, HStack, Skeleton, VStack } from '@chakra-ui/react';
import Oops from './Oops';
import { getFeaturedProductsApi } from '../redux/products/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const RecommendedProducts = () => {
    const isLoading = useSelector((state) => state.productReducer.isLoading);
    const isError = useSelector((state) => state.productReducer.isError);
    const data =
      useSelector((state) => state.productReducer.featuredProducts) || [];
  
    let dispatch = useDispatch();
    useEffect(() => {
      if (data?.length === 0) {
        dispatch(getFeaturedProductsApi());
      }
    }, [dispatch,data?.length]);
    console.log(data);
    return (
      <Container maxW="full" my="50px" p="20px" bg="brand.50">
               <Heading size={['md','lg']} color='brand.800' >Recommended for you</Heading>

        <Center>
          <HStack
            py="20px"
            display="flex"
            gap="20px"
            maxW="full"
            flexDirection={["column", "row"]}
          >
            {isLoading ? (
              [0, 0, 0, 0].map((val, i) => (
                <Skeleton
                  key={i}
                  margin="auto"
                  h={["300px", "200px", "200px", "300px"]}
                  w={["250px", "150px", "200px", "250px"]}
                  borderRadius="10px"
                  boxShadow="base"
                />
              ))
            ) : isError ? (
              <Oops />
            ) : (
              data?.length > 0 &&
              data?.map((prod) => {
                return (
                  <Box
                    key={prod.id}
                    h={["300px", "200px", "200px", "300px"]}
                    w={["250px", "150px", "200px", "250px"]}
                    borderRadius="10px"
                    bg="brand.500"
                    boxShadow="base"
                    bgClip="border-box"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgPos="center"
                    bgImg={prod.imageUrl}
                    p='10px'
                  >
                      <VStack>
  
                    
                    <Button as={Link} to={`/singleproduct/${prod?.docid}`} mt='100%' >Buy now</Button>
                      </VStack>
                  
                  </Box>
                );
              })
            )}
          </HStack>
        </Center>
      </Container>
    );
    
};

export default RecommendedProducts;