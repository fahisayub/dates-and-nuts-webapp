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
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

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
    navigate("/products");
  };

  return (
    <Container maxWidth={["full",'90%','80%']} margin="auto" mb='100px' padding='5px'>
      {isLoading ? (
        <Container 
        marginTop="50px"
        display="grid"
        maxW="full"
        gridTemplateAreas={[
          `"img""product""details""review" `,
          `"img""product""details""review" `,
          `"img""product""details""review" `,
          `"img img img product""review review review details" `,
          `"img img img product""review review review details"`,
        ]}
        gap="50px"
        padding='0px'
        >

        <Skeleton gridArea='img'
          margin="auto"
          borderRadius="10px"
          height="400px"
          width="400px"
          />
        <Skeleton gridArea='product'
          margin="auto"
          borderRadius="10px"
          height="400px"
          width="400px"
          />
        <Skeleton gridArea='review'
          margin="auto"
          borderRadius="10px"
          height="400px"
          width="400px"
          />
        <Skeleton gridArea='details'
          margin="auto"
          borderRadius="10px"
          height="400px"
          width="400px"
          />
          </Container>
      ) : isError ? (
        <Oops />
      ) : (
        <Container
          marginTop="50px"
          display="grid"
          maxW="full"
          gridTemplateAreas={[
            `"img""product""details""review" `,
            `"img""product""details""review" `,
            `"img""product""details""review" `,
            `"img img img product""review review review details"`,
            `"img img img product""review review review details"`,
          ]}
          gap="50px"
          padding='0px'
        >
            <Image  src={currentProduct?.imageUrl} gridArea="img" margin='auto' borderRadius="10px" />

          <Box gridArea="product">
            <Heading size="lg">{currentProduct?.title}</Heading>
            <Heading size="md" mt='10px' color="brand.600">
              {`\u20B9`} {currentProduct?.price / 100} / 100g
            </Heading>
            <Heading size={"md"} mt='20px'>Description</Heading>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                voluptates facere libero obcaecati, itaque sed ipsam consequatur
                sapiente quo illum repellat alias quia tempora veritatis
                doloribus veniam! Magni, cumque facilis?
              </Text>
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
            
              <HStack>
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
              </HStack>
            </Box>
          </Box>
          <Box gridArea="details">
            <Heading size="md">Product Details</Heading>
            <Text>{currentProduct?.description}</Text>
          </Box>
          <Box gridArea="review">
            <Heading size={"md"}>Reviews</Heading>
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default SingleProduct;
