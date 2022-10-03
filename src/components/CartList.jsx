import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartDataApi, getCartDataApi, updateCartApi } from "../redux/cart/actions";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Select,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Oops from "./Oops";
import { auth } from "../utils/firebase-config";
import CartItemCard from "./CartItemCard";
const CartList = () => {
  const isLoading = useSelector((state) => state.cartReducer.isLoading);
  const isError = useSelector((state) => state.cartReducer.isError);
  const cartItems = useSelector((state) => state.cartReducer.data) || [];
  const { uid } = useSelector((state) => state.userAuthReducer.profileData);

  console.log(uid);
  const user = auth?.currentUser;
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems?.length === 0) {
      dispatch(getCartDataApi(user));
    }
  }, [dispatch, user, cartItems?.length]);

 

  return (
    <Box p="20px" shadow="base" borderRadius="10px">
      <Flex>
        <Heading size="md">Shoping Cart</Heading>
        <Spacer />
        <Text fontWeight="semibold">Price</Text>
      </Flex>
      <Divider orientation="horizontal" borderColor="gray.300" />
      {isLoading ? (
        <Skeleton
          margin="auto"
          borderRadius="10px"
          height="200px"
          width="full"
          colorScheme="orange"
        />
      ) : isError ? (
        <Oops />
      ) : (
        cartItems?.map((item) => {
          return (
            <CartItemCard key={item?.productid} item={item}/>
          );
        })
      )}
    </Box>
  );
};

export default CartList;
