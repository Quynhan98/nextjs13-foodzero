import { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      border: '2px',
      borderRadius: '0px',
      fontSize: { base: 'xs', '2xl': 'sm' },
      height: { base: '50px', '2xl': '96px' },
      paddingLeft: '40px',
      backgroundColor: 'inherit',
      _placeholder: { color: 'silverFoil' },
    },
  },
  sizes: {
    default: {
      field: {
        width: '100%',
        height: { base: '50px', '2xl': '96px' },
      },
    },
  },

  variants: {
    primary: {
      field: {
        color: 'white',
        borderColor: 'white',
        _focus: {
          borderColor: 'white',
          boxShadow: '0 0 0 1px white',
        },
        _hover: { borderColor: 'white' },
      },
    },
    secondary: {
      field: {
        color: 'black',
        borderColor: 'black',
        _focus: {
          borderColor: 'black',
          boxShadow: '0 0 0 1px black',
        },
        _hover: { borderColor: 'black' },
      },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'secondary',
  },
}
