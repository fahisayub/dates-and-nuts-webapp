import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
const [searchParams,setSearchParams] = useSearchParams();
const urlSort=searchParams.get("sortBy");
const urlCategory=searchParams.getAll('category')
const [sort,setSort]=useState(urlSort||'');
const [category,setCategory]=useState(urlCategory||[]);


const onSort=(e)=>{
    let val=e;
    setSort(val);
    console.log(val);
}

const onCategory=(e)=>{
    const option=e.target.value;
    console.log(option);
    const newCategory=[...category];

    if(newCategory.includes(option)){
        newCategory.splice(newCategory.indexOf(option),1);
    }else{
        newCategory.push(option);
    }
    setCategory(newCategory);
    console.log(newCategory);
}


useEffect(()=>{
    if(sort||category){

        const params={};
        sort&&(params.sortBy=sort);
        category&&(params.category=category);
        setSearchParams(params);
    }
},[sort,setSearchParams,category])

  return (
    <Container width={['full','full',"full"]}  p='0px' >
      <Container display={['flex','flex','none']} justifyContent='space-between' p='20px' >
      <Menu closeOnSelect={false}>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='brand'>
    Filter
  </MenuButton>
  <MenuList minWidth='240px' p='20px'bg='brand.50'>
  <CheckboxGroup   defaultValue={[...category]} >
          <Stack spacing={[1, 2]} direction="column" >
            <Checkbox value="Dry Fruit"onChange={onCategory}>Dry Fruit</Checkbox>
            <Checkbox value="Nuts"onChange={onCategory}>Nuts</Checkbox>
            <Checkbox value="Seeds"onChange={onCategory}>Seeds</Checkbox>
            <Checkbox value="Spices"onChange={onCategory}>Spices</Checkbox>
            <Checkbox value="Dates"onChange={onCategory}>Dates</Checkbox>
            <Checkbox value="Gourmet Products"onChange={onCategory}>Gourmet Products</Checkbox>
          </Stack>
        </CheckboxGroup>
  </MenuList>
</Menu>
<Menu closeOnSelect={false}>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='brand'>
    Sort
  </MenuButton>
  <MenuList minWidth='240px ' p='20px' bg='brand.50'>
    
     <Text fontWeight="semibold">Sort by Price</Text>

        <RadioGroup name="sortByPrice" onChange={onSort}  defaultValue={sort}>
          <Stack direction="column">
            <Radio value="asc">Low to High</Radio>
            <Radio value="desc">High to Low</Radio>
          </Stack>
        </RadioGroup>
  
  </MenuList>
</Menu>
      </Container>
      <Container bg='brand.50' w='full'm='0px'minH='100vh'h='full'  display={['none','none','block']}>

      <Box>
        <Text fontWeight="semibold">Filter</Text>
        <CheckboxGroup   defaultValue={[...category]} >
          <Stack spacing={[1, 2]} direction="column" >
            <Checkbox value="Dry Fruit"onChange={onCategory}>Dry Fruit</Checkbox>
            <Checkbox value="Nuts"onChange={onCategory}>Nuts</Checkbox>
            <Checkbox value="Seeds"onChange={onCategory}>Seeds</Checkbox>
            <Checkbox value="Spices"onChange={onCategory}>Spices</Checkbox>
            <Checkbox value="Dates"onChange={onCategory}>Dates</Checkbox>
            <Checkbox value="Gourmet Products"onChange={onCategory}>Gourmet Products</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      

      
      <Divider  margin='20px 0px 20px 0px' display={['none','none','flex']} />
      <Box>
        <Text fontWeight="semibold">Sort by Price</Text>

        <RadioGroup name="sortByPrice" onChange={onSort}  defaultValue={sort}>
          <Stack direction="column">
            <Radio value="asc">Low to High</Radio>
            <Radio value="desc">High to Low</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      </Container>
    </Container>
  );
};

export default Sidebar;
