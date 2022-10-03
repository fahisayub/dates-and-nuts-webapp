

import { Box, Button, Container, FormLabel, Heading, Input, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProductApi, updateProductApi } from '../redux/products/actions';

const CreateUpdateForm = ({type,data}) => {
    const [form,setForm]=useState(data||{title:'',description:'',imageUrl:'',alt:'',type:'',instockQty:0, price:0});
    const [operationtype,setType]=useState(type)
    const dispatch=useDispatch();


    const onchangeHandler=(e)=>{
        const {name,value} = e.target;
        let payload={
            ...form,
            [name]:value,
        }
        setForm(payload);
        console.log(payload);

    }
    const oncreateHandler=()=>{
        dispatch(createProductApi(form,)).then(()=>{setForm({title:'',description:'',imageUrl:'',alt:'',type:'',instockQty:0, price:0})})
        
    }
    const onupdateHandler=()=>{
        let payload={
            form:form,id:data.docid
        }
        dispatch(updateProductApi(payload));
    
    }

    return (
        <Container shadow='base' padding='20px' borderRadius='10px'  bg='gray.50' >
            <Heading textAlign={'center'} margin='10px' color='orange.800'>{operationtype} Products</Heading>
            <Box h='200px' margin='auto' borderRadius='10px' w='200px' bgSize='cover' bgRepeat='no-repeat' bgPos='center' bgImage={form.imageUrl} marign='10px'jsutify='center'/>

            
            
            <FormLabel>Title</FormLabel>
            <Input type='text' name='title' onChange={onchangeHandler} value={form.title} />
            <FormLabel>Price</FormLabel>
            <Input type='text' name='price' onChange={onchangeHandler} value={form.price} />
            <FormLabel>Description</FormLabel>
            <Input type='text' name='description' onChange={onchangeHandler} value={form.description} />
            <FormLabel>Image</FormLabel>
            <Input type='text' name='imageUrl' onChange={onchangeHandler} value={form.imageUrl} />
            <FormLabel>Image Alt</FormLabel>
            <Input type='text' name='alt' onChange={onchangeHandler} value={form.alt} />
            <FormLabel>IntstockQty</FormLabel>
            <Input type='text' name='instockQty' onChange={onchangeHandler} value={form.instockQty} />
            <FormLabel>Type</FormLabel>
<Select name='type' onChange={onchangeHandler} value={form.type} >
    <option value="">---Select----</option>
    <option value="Dates">Dates</option>
    <option value="Dry Fruits">Dry Fruits</option>
    <option value="Gourmet Products">Gourmet Products</option>
    <option value="Nuts">Nuts</option>
    <option value="Seeds">Seeds</option>
    <option value="Spices">Spices</option>
</Select>
    <Button bg='green.400'_hover={{bg:'green.500'}}  margin='10px' onClick={operationtype==='Create'? oncreateHandler:onupdateHandler}>{operationtype}</Button>
        </Container>
    );
};

export default CreateUpdateForm;