import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdminApi } from '../redux/adminAuth/action';
  
   const  AdminRegister=()=> {
    const [showPassword, setShowPassword] = useState(false);
    const [form,setForm]=useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const comefrom=location?.state?.from||'/';
    const {isAdminAuth}=useSelector(state=>state.adminAuthReducer);
    const onchangeHandler=(e)=>{
        const {name,value}=e.target;
        let payload={
            ...form,
            [name]:value,

        }
        setForm(payload);
    }
    const onsubmitHandler=(e)=>{
e.preventDefault();
dispatch(registerAdminApi(form));

    }
    useEffect(()=>{
        if(isAdminAuth){
            navigate(comefrom,{replace:true});
        }
    },[isAdminAuth,comefrom,navigate]);

  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Admin Registration
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" name='username' onChange={onchangeHandler} />
                  </FormControl>
                
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' onChange={onchangeHandler} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name='password' onChange={onchangeHandler} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                 
                  color={'white'}
                  onClick={onsubmitHandler}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already have account? <Link as={NavLink} to='/adminlogin' color={'brand.400'}>Login as admin</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  export default AdminRegister;