import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Oops from "../components/Oops";
import RadioCard from "../components/RadioCard";
import { addToCartDataApi } from "../redux/cart/actions";
import { getCurrentProductApi } from "../redux/products/actions";

const SingleProduct = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(100);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const isError = useSelector((state) => state.productReducer.isError);
  const currentProduct = useSelector(
    (state) => state.productReducer.currentProduct
  );
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const toast = useToast();
  const options = [100, 250, 500, 1000];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "quantity",
    defaultValue: qty,
    onChange: (e) => {
      console.log(e);
      
      setQty(e);
    },
  });

  const group = getRootProps();

  useEffect(() => {
    if (id) {
      dispatch(getCurrentProductApi(id));
    }
  }, [id]);

  const onAddtoCartHandler = () => {
    let payload = {
      ...currentProduct,
      productid: id,
      quantity: qty,
    };
    console.log(payload);
    dispatch(addToCartDataApi(payload));
    toast({
      title: "Added to Cart.",
      description: `${currentProduct.title} added to cart`,
      position: "top-right",

      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate('/products')
  };

  return (
    <Container maxWidth={["full", "90%", "70%"]}>
      {isLoading ? (
        <Skeleton
          margin="auto"
          borderRadius="10px"
          height="400px"
          width="400px"
        />
      ) : isError ? (
        <Oops />
      ) : (
        <Container
          marginTop="50px"
          display={["block", "block", "flex", "flex", "flex"]}
          gap="50px"
        >
          <Image
            src={currentProduct?.imageUrl}
            borderRadius="10px"
            height="400px"
          />
          <Box>
            <Text>Product id:{id}</Text>
            <Heading size="md">{currentProduct?.title}</Heading>
            <Box pt="50px">
              <Heading size="xs">Select quantity:</Heading>
              <Stack {...group} direction={["column", "row"]}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      <Text>{value}g</Text>
                    </RadioCard>
                  );
                })}
              </Stack>
              <Button width="full" my="10px" bg="orange.300">
                Buy now
              </Button>
              <Button
                width="full"
                my="10px"
                bg="orange"
                onClick={onAddtoCartHandler}
              >
                Add to cart
              </Button>
            </Box>
            <Heading size="xs">Description</Heading>
            <Text>{currentProduct?.description}</Text>
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default SingleProduct;
