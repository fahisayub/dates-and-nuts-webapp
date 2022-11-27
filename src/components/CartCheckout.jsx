import React, { useState } from "react";
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
  Table,
  Tr,
  Td,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { addUserOrdersApi } from "../redux/orders/actions";
import AddShippingAddressForm from "./AddShippingAddressForm";
import { useNavigate } from "react-router-dom";
import { deleteShippingAddressApi } from "../redux/userAuth/action";
const CartCheckout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addressformState, setAddresssForm] = useState(false);

  const toast = useToast();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.data) || [];
  const shippingAddress =
    useSelector((state) => state.userAuthReducer.address) || [];
  const initTotal = 0;
  const cartTotal = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * (currentValue.quantity / 100),
    initTotal
  );
  const [shippingaddress, setAddress] = useState(shippingAddress[0]);
  const navigate = useNavigate();
  const oncheckoutHandler = () => {
    const payload = {
      items: cartItems,
      address: shippingaddress,
    };
    dispatch(addUserOrdersApi(payload));
    onClose();
    navigate("/orders");
    toast({
      title: "Order Place.",
      position:'top',
      description: "order place successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  const onDeleteAddress = (id) => {
    dispatch(deleteShippingAddressApi(id));
  };

  return (
    <Box boxShadow="base" p="20px" textAlign="left" gap="10px">
      <Box>
        <Heading size="sm">Shipping Address</Heading>
        <Box px="10px" py="5px" gap="10px">
          <Box>
            <Text>{shippingAddress[0]?.addresstitle}</Text>
            <Text>{shippingAddress[0]?.address},</Text>
            <Text>{shippingAddress[0]?.pincode}</Text>
          </Box>
          <Button size="sm" variant="outline" onClick={onOpen}>
            Change
          </Button>
        </Box>
        <Divider margin="10px" />
      </Box>
      <Heading size="sm">Order Summary</Heading>
      <Table variant="unstyled">
        <Tr>
          <Td>
            <Text>Sub Total{`(${cartItems?.length} items)`}:</Text>
          </Td>
          <Td>
            {`\u20B9`}
            {cartTotal / 100}/-
          </Td>
        </Tr>
        <Tr>
          <Td>Tax:</Td>
          <Td>{`\u20B9`}0/-</Td>
        </Tr>
        <Tr>
          <Td>Discount:</Td>
          <Td>{`\u20B9`}0/-</Td>
        </Tr>
      </Table>
      <Divider margin="10px" />
      <Table variant="unstyled">
        <Tr>
          <Td>
            <Heading size="sm" color="red.600">
              Total Price:
            </Heading>
          </Td>
          <Td>
            <Heading size="sm" color="red.600">
              {`\u20B9`}
              {cartTotal / 100}/-
            </Heading>
          </Td>
        </Tr>
      </Table>
      <Button mt="10px" colorScheme="orange" onClick={onOpen}>
        Checkout
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent p="0px">
          <ModalHeader>
            <Heading>Checkout</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display='grid' gridTemplateAreas={[`"order""pay"`,`"order order order pay"`,]}>
            <Divider margin="10px" />
            <Accordion gridArea='order' allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton backgroundColor='orange.400' _hover={{backgroundColor:'orange'}} >
                    <Box flex="1" textAlign="left">
                      <Heading size="md">Shipping Address</Heading>
                    </Box>
                    <AccordionIcon  />
                  </AccordionButton>
                </h2>
                <AccordionPanel >
                  <Box>
                    <SimpleGrid columns={[1,1,2,2,2]}  gap='10px'>
                      {shippingAddress?.map((address, i) => {
                        return (
                          <Box
                            key={address?.addressid}
                            fontSize=".7em"
                            borderRadius="10px"
                            bg={
                              address?.addressid === shippingaddress?.addressid
                                ? "orange"
                                : ""
                            }
                            border="1px solid orange"
                            p="10px"
                          >
                            <Box onClick={() => setAddress(address)}>
                              <Heading size="sm">
                                {address?.addresstitle}
                              </Heading>
                              <Text>{address?.address}</Text>
                              <Text>{address?.country}</Text>
                              <Text>{address?.state}</Text>
                              <Text>{address?.city}</Text>
                              <Text>{address?.pincode}</Text>
                            </Box>
                            <Divider
                              marginBottom="5px"
                              borderColor="gray.200"
                            />
                            <Button
                              size="xs"
                              colorScheme="red"
                              variant="outline"
                              onClick={() =>
                                onDeleteAddress(address?.addressid)
                              }
                            >
                              Delete
                            </Button>
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
                        {addressformState
                          ? "X Cancel"
                          : "+ Add Shipping Address"}
                      </Button>
                    </SimpleGrid>
                    {addressformState ? (
                      <AddShippingAddressForm formstate={addressformState} />
                    ) : null}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
              <h2>
                  <AccordionButton backgroundColor='orange.300' _hover={{backgroundColor:'orange.400'}}>
                    <Box flex="1" textAlign="left">
                <Heading size="md">Orders</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                <Box boxShadow="base" p="10px">
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
                      <Box p="10px">
                        <Text>{item.title}</Text>
                        <Text>Qty:{item.quantity}g</Text>

                        <Text>
                          Price:{`\u20B9`}
                          {((item?.price / 100) * item?.quantity) / 100}/-
                        </Text>
                        <Text>
                          Delivery Address:{shippingaddress?.address},
                          {shippingaddress?.pincode}
                        </Text>
                        <Divider margin="10px" />
                      </Box>
                    </Flex>
                  );
                })}
              </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Divider margin="10px" />
              
              <Box p="10px" boxShadow="base"  gridArea='pay'>
                <Heading size="md">Order Total</Heading>
                <Table variant="unstyled">
                  <Tr>
                    <Td>
                      <Text>Sub Total{`(${cartItems?.length} items)`}:</Text>
                    </Td>
                    <Td>
                      {`\u20B9`}
                      {cartTotal / 100}/-
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tax:</Td>
                    <Td>{`\u20B9`}0/-</Td>
                  </Tr>
                  <Tr>
                    <Td>Discount:</Td>
                    <Td>{`\u20B9`}0/-</Td>
                  </Tr>
                </Table>
                <Divider margin="10px" />
                <Table variant="unstyled">
                  <Tr>
                    <Td>
                      <Heading size="sm" color="red.600">
                        Total Price:
                      </Heading>
                    </Td>
                    <Td>
                      <Heading size="sm" color="red.600">
                        {`\u20B9`}
                        {cartTotal / 100}/-
                      </Heading>
                    </Td>
                  </Tr>
                </Table>
                <Center>
                  <Button
                    variant="solid"
                    colorScheme="brand"
                    onClick={oncheckoutHandler}
                  >
                    Pay Now
                  </Button>
                </Center>
              </Box>
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
