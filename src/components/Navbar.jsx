import {  ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Spacer,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/dates N nuts.png";
import { signoutAdminApi } from "../redux/adminAuth/action";
import { signoutUserApi } from "../redux/userAuth/action";

const Navbar = () => {
  const isUserAuth = useSelector((state) => state.userAuthReducer.isUserAuth);
  const isAdminAuth = useSelector((state) => state.adminAuthReducer.isAdminAuth);
  //const profileData=useSelector((state) => state.userAuthReducer.profileData);

  const dispatch = useDispatch();

  const onSignout = () => {
    dispatch(signoutUserApi());
  };
  const onAdminSignout = () => {
    dispatch(signoutAdminApi());
  };

  return (
    <Flex
      px={['10px','20px','30px','40px',"50px"]}
      py="10px"
      bg="brand.800"
      color="white"
      gap="20px"
      alignItems="center"
      boxShadow="dark-lg"
    >
     
      <Link to="/">
        <Image  src={logo} h="50px" />
      </Link>
      <Spacer />
      <Flex gap="50px" display={['none','none','flex']}>
        <Link to="/">
          <Text _hover={{color:'brand.50'}}>Home</Text>
        </Link>

        <Link to="/products">
          <Text _hover={{color:'brand.50'}}>Products</Text>
        </Link>
      </Flex>
      <Spacer />
      
      <Menu >
        <MenuButton as={Button} colorScheme="brand">
          {isUserAuth ? "Profile" : "Login"}
          <ChevronDownIcon/>
        </MenuButton>
        <MenuList color="black" >
          <MenuGroup title="Profile" >
            <MenuItem _hover={{bgColor:'brand.50'}} >
              <Link to="/orders">
                <Text>My Orders</Text>
              </Link>
            </MenuItem>
            <MenuItem _hover={{bgColor:'brand.50'}}>
              <Link to="/cart">
                <Text>Cart</Text>
              </Link>
            </MenuItem>
              {isUserAuth ? (
            
                <Button variant="outline" colorScheme='red' mx='10px' onClick={onSignout}>
                  Signout
                </Button>
              ) : (
                <Button  as={Link} to="/userlogin"mx='10px' colorScheme='brand' >
                  <Text>Login</Text>
                </Button>
              )}
          </MenuGroup>
          <MenuDivider borderColor='brand.100' />
          <MenuGroup title="Admin">
            
            <MenuItem _hover={{bgColor:'brand.50'}}>
              <Link to="/admindashboard">
                <Text>Admin Dashboard</Text>
              </Link>
            </MenuItem>
              {isAdminAuth ? (
                <Button variant="outline" colorScheme='red'mx='10px' onClick={onAdminSignout}>
                  Admin Signout
                </Button>
              ) : (
                <Button  as={Link} to="/adminlogin"mx='10px' colorScheme='brand' >
                  <Text>Admin Login</Text>
                </Button>
              )}
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
