import { Box, Divider, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const OrderUserCard = ({item}) => {
    return (
        <Flex display={['block','block','flex']} shadow='base' margin='10px'borderRadius='10px' padding='10px' gap='10px'>
        <Image src={item.imageUrl} w='150px' h='100px' />
      <Box>
        <Text fontSize='sm' >Order id:#{item?.orderid}</Text>  
        <Divider/>
        <Text fontSize='md' fontWeight='semibold' >Item Name: {item?.title}</Text>  
        <Text fontSize='md' >Qty: {item?.quantity}</Text>  
        <Divider/>
        <Text fontSize='md' >Delivery Address: {item?.address},{item?.pincode}</Text>  
    </Box>
    <Spacer/>
      <Box width='200px'>
        <Text fontSize='md' >Order status:</Text>  
        <Text fontSize='md'fontWeight='semibold' color='indigo' >{item?.orderStatus}</Text>  
        
    </Box>
    </Flex>
    );
};

export default OrderUserCard;