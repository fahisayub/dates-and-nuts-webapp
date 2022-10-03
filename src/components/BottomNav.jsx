import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import {
    BottomNavigation,
    BottomNavigationItem,
   
  } from "chakra-ui-bottom-navigation";
import { Link } from 'react-router-dom';
const BottomNav = () => {
    return (
        
  
        <BottomNavigation
        display={['flex','none','none']}
          h='50px'
          borderRadius='10px'
          color="white"
          bg='brand.800'
          variant="float"
          showLabel="if-active"
        >
          <BottomNavigationItem>
            <Link to='/'>
            Home
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem>
            <Link to='/products'>
            Prodcuts
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem>
            <Link to='/cart'>
            Cart
            </Link>
          </BottomNavigationItem>
        </BottomNavigation>
    );
};

export default BottomNav;