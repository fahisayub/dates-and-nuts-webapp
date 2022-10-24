import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      maxW="full"
      display={['none', 'block']}
      //h={['400px',"200px"]}
      bg="brand.900"
      padding="20px"
      color="brand.50"
    >
      <Flex  flexDirection={['column','row','row']}  textAlign='left'>
        <Box p='50px'>
          <Text >About </Text>
          <Divider mb='10px' />
          <Link to="/">About Us</Link>
          <br />
          <Link to="/products">Products</Link>
          <br />
          <Link to="/orders">Orders</Link>
          <br />
          <Link to="/cart">Cart</Link>
        </Box>
        <Box p='50px'>
          <Text>Contact Us</Text>
          <Divider mb='10px' />
          <Text>Toll free:+91 8734859990</Text>
          <Text>Email : support@datesnnuts.com</Text>
        </Box>
        <Box p='50px'>
          <Text>Social</Text>
          <Divider mb='10px' />
          <Text>LinkedIn</Text>
          <Text>Twitter</Text>
          <Text>Instagram</Text>
          <Text>Youtube </Text>
        </Box>
      </Flex>
          <Divider my="10px" />
      
        <Box>© All right reserved 2020-2022, datesnnuts.com</Box>
    </Container>
  );
};

export default Footer;
