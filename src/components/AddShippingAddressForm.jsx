import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShippingAddressApi, loginUserApi } from "../redux/userAuth/action";

const AddShippingAddressForm = ({formstate}) => {

  const [form, setForm] = useState({});
  const [addressformState,setAddresssForm]=useState(formstate||false);

  const dispatch = useDispatch();
  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    const payload = {
      ...form,
      [name]: value,
    };
    setForm(payload);
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addShippingAddressApi(form));
    setAddresssForm(false);
    setForm({});
  };

  return (
      
      <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      >
      {addressformState?
      <Stack spacing={4}>
      <Heading size="md">Add Shipping Address</Heading>

        <FormControl id="addresstitle">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="addresstitle"
            value={form.addresstitle}
            onChange={onchangeHandler}
            />
        </FormControl>
        <FormControl id="address">
        <FormLabel>Shipping Address</FormLabel>
        <Input
        type="text"
        name="address"
        value={form.address}
        onChange={onchangeHandler}
        />
        </FormControl>
        <Flex gap="10px">
          <FormControl id="Country">
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              name="country"
              value={form.country}
              onChange={onchangeHandler}
              />
              </FormControl>
              <FormControl id="state">
              <FormLabel>State</FormLabel>
            <Input
            type="text"
            name="state"
            value={form.state}
            onChange={onchangeHandler}
            />
            </FormControl>
            </Flex>
            <Flex gap="10px">
            <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input
            type="text"
            name="city"
            value={form.city}
            onChange={onchangeHandler}
            />
            </FormControl>
            <FormControl id="Pincode">
            <FormLabel>Pincode</FormLabel>
            <Input
            type="number"
            name="pincode"
            value={form.pincode}
            onChange={onchangeHandler}
            />
            </FormControl>
            </Flex>
            <Stack spacing={10}>
            <Button color={"white"} onClick={onsubmitHandler}>
            Save
            </Button>
            </Stack>
            </Stack>
            :''}
            </Box>
            );
        };
        export default AddShippingAddressForm;
        