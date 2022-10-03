import { Box, Input, useRadio } from "@chakra-ui/react"

const  RadioCard=(props)=> {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <Input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          borderColor='orange.600'
          _checked={{
              bg: 'orange.800',
              color: 'white',
            }}
            _focus={{
                ring:2,
              ringColor:'orange.600',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  export default RadioCard;