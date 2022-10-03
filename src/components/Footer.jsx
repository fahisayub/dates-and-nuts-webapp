import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      maxW="full"
      h={['400px',"200px"]}
      bg="brand.900"
      padding="50px"
      color="brand.50"
    >
      <Flex justifyContent="space-evenly" flexDirection={['column','row','row']}>
        <Box>
          <Link to="/">About Us</Link>
          <br />
          <Link to="/products">Products</Link>
          <br />
          <Link to="/orders">Orders</Link>
          <br />
          <Link to="/cart">Cart</Link>
          <Divider margin="10px" />
        </Box>
        <Box>
          <Text>Contacts:</Text>
          <Text>Toll free:+91 8734859990</Text>
          <Text>Email : support@datesnnuts.com</Text>
          <Divider margin="10px" />
        </Box>
      </Flex>
        <Box>© All right reserved 2020-2022, datesnnuts.com, pvt.ltd</Box>
    </Container>
  );
};

export default Footer;
