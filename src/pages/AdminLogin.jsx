import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { loginAdminApi } from '../redux/adminAuth/action';
  
   const  AdminLogin=()=> {

const [form,setForm]=useState({});
const dispatch=useDispatch();
const location=useLocation();
const comefrom=location?.state?.from||'/';
const navigate=useNavigate();
const {isAdminAuth}=useSelector(state=>state.adminAuthReducer);
const onchangeHandler=(e)=>{
const {name,value}=e.target;
    const payload={
        ...form,[name]:value,
    }
    setForm(payload);
}

const onsubmitHandler=(e)=>{
    e.preventDefault();
    dispatch(loginAdminApi(form));
}
useEffect(()=>{
    if(isAdminAuth){

        navigate(comefrom,{replace:true});
    }
},[isAdminAuth,navigate,comefrom])



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Admin Login</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email'onChange={onchangeHandler} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={onchangeHandler} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'brand.400'}>Forgot password?</Link>
                </Stack>
                <Flex>
                <Text>New admin? </Text>
                <NavLink to='/adminregister'  ><Text color='brand.400'>Register here</Text></NavLink>
                </Flex>
                <Button
                 
                  color={'white'}
                  onClick={onsubmitHandler}
                 >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  export default AdminLogin;