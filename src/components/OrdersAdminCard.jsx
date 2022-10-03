import { Box, Button, Flex, Image, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select, } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrderApi } from '../redux/orders/actions';

const OrdersAdminCard = ({item}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [form,setForm]=useState({});
    const dispatch=useDispatch();
const onchangeHandler=(e)=>{
  const  {name,value}=e.target;
  let payload={
    orderid:item?.orderid,
    [name]:value,
  }
  setForm(payload);
  console.log(payload);
}


    const onUpdateHandler=()=>{
dispatch(updateOrderApi(form));
    }

    return (
        <Flex display={['block','block','flex']} boxShadow='base'margin='10px'borderRadius='10px' padding='10px' gap='10px'>
            <Image src={item.imageUrl} height='50px' />
          <Box>
            <Text fontSize='sm' >Order id:#{item?.orderid}</Text>  
            <Text fontSize='md' >Item Name: {item?.title}</Text>  
            <Text fontSize='md' >Qty: {item?.quantity}</Text>  
            <Text fontSize='md' >Shipping Address: {item?.address},{item.pincode}</Text>  
        </Box>
          <Box>
            <Text fontSize='md' >Order status:</Text>  
            <Text fontSize='md'fontWeight='semibold' color='indigo' >{item?.orderStatus}</Text>  
            <Button size='sm' colorScheme='green' onClick={onOpen} >Update status</Button>
            <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Order Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Text>Orderid: #{item?.orderid}</Text>
        <Select name='orderStatus' defaultValue={item?.orderStatus} onChange={onchangeHandler} >
            <option value='placed'>Placed</option>
            <option value='shiped'>Shiped</option>
            <option value='outfordelivery'>Out For Delivery</option>
            <option value='delivered'>Delivered</option>
        </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='solid' colorScheme='green' onClick={onUpdateHandler}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
        </Flex>
    );
};

export default OrdersAdminCard;