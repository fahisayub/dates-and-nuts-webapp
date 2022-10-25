import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
    return (
     < Link to={`/singleproduct/${data?.docid}`}>
        <Box  padding='10px' shadow='md' height='300px' width='250px' margin='auto'borderRadius='10px'>
        <Image src={data?.imageUrl} alt='product image' borderRadius='10px' height='10em'width='rem' margin='auto'  />
        <Text fontWeight='semibold' fontSize='1em'>{data?.title}</Text>
        <Text fontSize='1em'> {`\u20B9`} {data?.price/100}/-</Text>
      </Box>
     </Link>
    );
};

export default ProductCard;