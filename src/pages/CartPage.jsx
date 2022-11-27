import { Box, Container,  Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartCheckout from "../components/CartCheckout";

import CartList from "../components/CartList";
import { getShippingAddressApi } from "../redux/userAuth/action";

const CartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShippingAddressApi());
  }, [dispatch]);

  return (
    <Container
      maxWidth="90%"
      p="20px"
      display="grid"
      gap='20px'
      mb='50px'
      gridTemplateAreas={[
        `"heading""cart""checkout"`,
        `"heading""cart""checkout"`,
        `"heading""cart""checkout"`,
        `"heading heading heading heading""cart cart cart checkout"`,
        `"heading heading heading heading""cart cart cart checkout"`,

      ]}
    >
      <Heading gridArea="heading">My Cart</Heading>
      <Box gridArea="cart">
        <CartList />
      </Box>
      <Box gridArea="checkout">
        <CartCheckout />
      </Box>
    </Container>
  );
};
export default CartPage;
