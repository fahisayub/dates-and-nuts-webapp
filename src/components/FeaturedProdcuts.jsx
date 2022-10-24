import { Box, Center, Container, Flex, Heading, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductApi } from '../redux/products/actions';
import Oops from './Oops';

const FeaturedProdcuts = () => {
    const isLoading=useSelector((state) => state.productReducer.isLoading)
    const isError=useSelector((state) => state.productReducer.isError)
    const data=useSelector((state) => state.productReducer.data)||[]

    let dispatch=useDispatch();
    useEffect(()=>{
        if(data?.length===0){
            dispatch(getProductApi())
          }
    },[])

    return (
        <Container maxW='full'  my='50px' p='20px' bg='brand.50' >
        <Heading size={['md','lg']} color='brand.800' >Featured Products</Heading>
        <Center>

        <Container py='20px'display='flex' gap='20px'maxW='full' flexDirection={['column','row']}>
        {isLoading?[0,0,0,0].map((val,i)=><Skeleton key={i} margin='auto'  borderRadius='10px'  height='250px' width='250px'/>)
        :isError?<Oops/>:data?.length>0 && data?.map((prod)=>{
            return(
                <Box h={['300px','200px','200px','300px']} w={['250px','150px','200px','250px']} borderRadius='10px' bg='brand.500' boxShadow='base'></Box>
            );
        })}
            </Container>
        </Center>

        </Container>
    );
};

export default FeaturedProdcuts;