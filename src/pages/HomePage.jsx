import { Button, Center, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import FeaturedProdcuts from "../components/FeaturedProdcuts";
import RecommendedProducts from "../components/RecommendedProducts";


const HomePage = () => {
 
  return (
    <Container maxWidth="full" minH="auto" p="0px">
      <Container
        maxWidth="full"
        minH="auto"
        p="0px"
        display={["block", "block", "flex", "flex", "flex"]}
      >
        <Container
          maxWidth={["full"]}
          h={["200px", "200px", "500px", "500px", "500px"]}
          bgRepeat="no-repeat"
          bgPos="left"
          bgSize="cover"
          p="0px"
          bgImage={
            "https://jiji-blog.com/wp-content/uploads/2019/02/tiger-nut-dates-coconut-3.jpg"
          }
        ></Container>
        <Container marginLeft="0px" bgColor="brand.700" color="white" h="500px">
          <Heading textAlign="center" fontSize="3.5rem" lineHeight="100px">
            "Quality Preserves forever"
          </Heading>
          <Center>
            <Button colorScheme="brand" my="100px" as={Link} to="/products">
              Shop Now {`>`}
            </Button>
          </Center>
        </Container>
      </Container>
      <FeaturedProdcuts />
      <RecommendedProducts />
    </Container>
  );
};

export default HomePage;
