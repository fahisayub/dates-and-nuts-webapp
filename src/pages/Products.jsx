import { Center, Flex, Grid, GridItem, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const Products = () => {
  return (
    <Grid
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={2}
display={['block','flex']}
>
      <GridItem
        rowSpan={6}
        colSpan={1}
        padding="0px"
        margin="0px"
        bg='brand.50'
      >
        <Sidebar />
      </GridItem>
      <GridItem rowSpan={6} colSpan={5}>
        <ProductList />
      </GridItem>
    </Grid>
  );
};

export default Products;
