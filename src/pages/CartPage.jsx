import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartCheckout from "../components/CartCheckout";

import CartList from "../components/CartList";
import { getShippingAddressApi } from "../redux/userAuth/action";

const CartPage = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getShippingAddressApi())
  },[]);
   
  return (
    <Container maxWidth="80%" p="20px">
      <Flex justifyContent="space-evenly" display={['block','block','flex','flex','flex']}>
        <CartList />
        <CartCheckout />
      </Flex>
    </Container>
  );
};
export default CartPage;
