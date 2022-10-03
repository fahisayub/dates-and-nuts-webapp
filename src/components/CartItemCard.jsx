import React from 'react';
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Select,
    Spacer,
    Text,
  } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { deleteCartDataApi, updateCartApi } from '../redux/cart/actions';
const CartItemCard = ({item}) => {

    const dispatch = useDispatch();


    const onQtyChangeHandler=(e)=>{
        let value=e.target.value;
        let payload={
            ...item,
          quantity:value,
        }
        dispatch(updateCartApi(payload));
      }
      const deleteItem=(item)=>{
        dispatch(deleteCartDataApi(item));
      }

    return (
        <Box  fontSize=".9em">
              <Flex margin="10px" gap="10px">
                <Image
                  src={item?.imageUrl}
                  h="50px"
                  w="70px"
                  borderRadius="10px"
                />
                <Box>
                  <Heading fontWeight="semibold" fontSize=".9em">
                    {item?.title}
                  </Heading>
                  <Flex>
                    <Select
                      size="xs"
                      w="120px"
                      variant="filled"
                      placeholder={`Qty:${item?.quantity}g`}
                      onChange={onQtyChangeHandler}
                    >
                      <option value={100}>100g</option>
                      <option value={250}>250g</option>
                      <option value={500}>500g</option>
                      <option value={1000}>1kg</option>
                    </Select>

                    <Button size="xs" colorScheme="red" variant="ghost" onClick={()=>deleteItem(item)}>
                      Delete
                    </Button>
                  </Flex>
                </Box>
                <Spacer />
                <Text fontWeight="semibold">
                  {`\u20B9`}
                  {item?.price / 100*item.quantity/100}/-
                </Text>
              </Flex>
              <Divider orientation="horizontal" borderColor="gray.300" />
            </Box>
    );
};

export default CartItemCard;