import { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      border: '2px',
      borderRadius: '0px',
      borderColor: 'black',
      fontSize: { base: 'xs', md: 'sm' },
      height: { base: '50px', md: '96px' },
      paddingLeft: '40px',
      _focus: {
        borderColor: 'black',
        boxShadow: '0 0 0 1px black',
      },
      _hover: { borderColor: 'black' },
    },
  },
  sizes: {
    default: {
      field: {
        width: '100%',
        height: { base: '50px', md: '96px' },
      },
    },
  },

  variants: {
    primary: {
      field: {
        color: 'white',
      },
    },
    secondary: {
      field: {
        color: 'black',
      },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'secondary',
  },
}
