import {   Center, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const Products = () => {
 
  return (
<Center>

    <Flex  display={['block','block','flex']} h='auto' >
<Sidebar />
<Spacer/>
   <ProductList/>
    </Flex>
</Center>
  );
};

export default Products;
