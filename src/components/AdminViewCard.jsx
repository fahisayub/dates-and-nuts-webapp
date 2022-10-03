

import React from 'react';
import { Box, Button, Flex, Image, Spacer, Text, Modal,
    ModalOverlay,
    ModalContent,
    
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { deleteProductApi } from '../redux/products/actions';
import CreateUpdateForm from './CreateUpdateForm';

const AdminViewCard = ({data}) => {
const dispatch=useDispatch();
const { isOpen, onOpen, onClose } = useDisclosure()

 



const ondeleteHandler=()=>{
    dispatch(deleteProductApi(data.docid));

}

    return (
        <Box  padding='10px' shadow='md' height='250px' width='200px' margin='5px'borderRadius='10px'>
        <Image src={data?.imageUrl} alt='product image' borderRadius='10px' height='5em'width='rem' margin='auto'  />
        <Text fontWeight='semibold' fontSize='.6em'>{data?.title}</Text>
        <Text fontSize='.6em'> {`\u20B9`} {data?.price/100}/-</Text>
        <Flex>

        <Button size='sm' bg='blue.400' color='white' onClick={onOpen}>update</Button>
        <Spacer/>
        <Button size='sm' color='white' bg='red' onClick={ondeleteHandler}>delete</Button>
        </Flex>
        <Modal
       size='4xl'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6} minW='auto' >
           <CreateUpdateForm type='Update' data={data} />
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    );
};

export default AdminViewCard;