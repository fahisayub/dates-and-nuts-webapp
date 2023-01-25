import {
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const onChangeHandler = (e) => {
    let { value } = e.target;
    setQuery(value);//TODO: not checked, check its working properly
  };
  let onSearchHandler=()=>{
    //TODO:need to complete the on click event,need to create reducer action for search
  }

  return (
    <div>
      <Container my="20px">
        <Flex>
          <InputGroup>
            <Input
              name="search"
              placeholder="Search Product Category Here..."
              onChange={onChangeHandler}
            />
            <InputRightElement w="30%">
              <Button w={"100%"} colorScheme="blue" value={query} onClick={onSearchHandler}>
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Container>
    </div>
  );
};

export default SearchBar;
