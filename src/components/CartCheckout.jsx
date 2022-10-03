import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  Text,
  Flex,
  Divider,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { addUserOrdersApi } from "../redux/orders/actions";
import AddShippingAddressForm from "./AddShippingAddressForm";
import { useNavigate } from "react-router-dom";
import { deleteShippingAddressApi, getShippingAddressApi } from "../redux/userAuth/action";
const CartCheckout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addressformState, setAddresssForm] = useState(false);

  const toast = useToast();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.data) || [];
  const shippingAddress =useSelector((state) => state.userAuthReducer.address)||[];
    const initTotal = 0;
    const cartTotal = cartItems.reduce(
      (previousValue, currentValue) =>
      previousValue + currentValue.price * (currentValue.quantity / 100),
      initTotal
      );
      const [shippingaddress, setAddress] = useState(shippingAddress[0]);
const navigate=useNavigate();
  const oncheckoutHandler = () => {
   const payload={
    items:cartItems,address:shippingaddress,
   }
    dispatch(addUserOrdersApi(payload));
    onClose();
    navigate('/orders');
    toast({
      title: "Order Place.",
      description: "order place successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    
  };
  const onDeleteAddress=(id)=>{
    dispatch(deleteShippingAddressApi(id))
  }
 

  return (
    <Box
      height="400px"
      boxShadow="base"
      p="20px"
      textAlign="left"
      gap="10px"
    >
      <Heading size="sm">Order Summary</Heading>
      <Box>
        <Text>
          Sub Total{`(${cartItems?.length} items)`}:{`\u20B9`}
          {cartTotal / 100}/-
        </Text>
        <Text>Tax:{`\u20B9`}0/-</Text>
        <Text>Discount:{`\u20B9`}0/-</Text>
        <Heading size="xs" color="red.600">
          Total Price: {`\u20B9`}
          {cartTotal / 100}/-
        </Heading>
      </Box>
      <Box>
        <Divider margin="10px" />
        <Heading size="xs">Shipping Address</Heading>
        <Flex px="10px" py="5px" gap="10px">
          <Box>
            <Text>{shippingAddress[0]?.addresstitle}</Text>
            <Text>{shippingAddress[0]?.address},</Text>
            <Text>{shippingAddress[0]?.pincode}</Text>
          </Box>
          <Button size="sm" variant="outline" onClick={onOpen}>
            Change
          </Button>
        </Flex>
      </Box>
      <Divider margin="10px" />
      <Button colorScheme="orange" onClick={onOpen}>
        Checkout
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent p='20px'>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md">Shipping Address</Heading>
            <Divider margin="10px" />
            <Flex>
              <SimpleGrid columns={4} spacing={10}>
                {shippingAddress?.map((address, i) => {
                  return (
                   
                      <Box
                        key={address?.addressid}
                      
                        fontSize=".7em"
                        borderRadius="10px"
                        bg={ address?.addressid === shippingaddress?.addressid?'orange':''}
                        border='1px solid orange'
                        p='10px'
                        height="150px"
                        >
                        <Box 
                        onClick={() => setAddress(address)}>

                        <Heading size="sm">{address?.addresstitle}</Heading>
                        <Text>{address?.address}</Text>
                        <Text>{address?.country}</Text>
                        <Text>{address?.state}</Text>
                        <Text>{address?.city}</Text>
                        <Text>{address?.pincode}</Text>
                      </Box>
                      <Divider marginBottom='5px' borderColor='gray.200'/>
                        <Button size='xs' colorScheme='red' variant='outline' onClick={()=>onDeleteAddress(address?.addressid)}>Delete</Button>
                      </Box>
                  );
                })}
                <Button
                  variant="outline"
                  h="150px"
                  borderStyle="dashed"
                  m="5px"
                  fontSize=".8em"
                  onClick={() => setAddresssForm(!addressformState)}
                >
                  + Add Shipping Address
                </Button>
              </SimpleGrid>
              {addressformState ? (
                <AddShippingAddressForm formstate={addressformState} />
              ) : null}
            </Flex>
            <Divider margin="10px" />
                <Flex justifyContent='space-between'>

            <Box boxShadow="base" p='10px' width='60%'>
            <Heading size="md">Orders</Heading>
            <Divider margin="10px" />
              {cartItems?.map((item) => {
                return (
                  <Flex p="10px" key={item.productid}>
                    <Image
                  src={item?.imageUrl}
                  h="50px"
                  w="70px"
                  borderRadius="10px"
                />
                  <Box  p="10px" >
                    <Text>{item.title}</Text>
                    <Text>Qty:{item.quantity}g</Text>

                    <Text>
                      Price:{`\u20B9`}
                      {((item?.price / 100) * item?.quantity) / 100}/-
                    </Text>
                    <Text>Delivery Address:{shippingaddress?.address},{shippingaddress?.pincode}</Text>
                    <Divider margin="10px" />
                  </Box>
                  </Flex>
                );
              })}
            </Box>
            <Box p='10px' boxShadow='base'width='30%'>
              <Heading size='md'>Order Total</Heading>
              <Text>
          Sub Total{`(${cartItems?.length} items)`}:{`\u20B9`}
          {cartTotal / 100}/-
        </Text>
        <Text>Tax:{`\u20B9`}0/-</Text>
        <Text>Discount:{`\u20B9`}0/-</Text>
        <Heading size="xs" color="red.600">
          Total Price: {`\u20B9`}
          {cartTotal / 100}/-
        </Heading>
            <Button
              variant="solid"
              colorScheme="brand"
              onClick={oncheckoutHandler}
            >
              Pay Now
            </Button>
            </Box>
                    </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CartCheckout;
