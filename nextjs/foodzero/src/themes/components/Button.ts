import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: { base: 'base', md: 'md' },
    lineHeight: { base: 'xs', md: 'sm' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Rufina',
    borderRadius: '0px',
    color: 'white',
  },
  sizes: {
    large: {
      width: '100%',
      height: { base: '42px', md: '88px' },
    },
    default: {
      width: { base: '152px', md: '285px' },
      height: { base: '50px', md: '88px' },
    },
    primary: {
      width: { base: '200px', md: '344px' },
      height: { base: '50px', md: '88px' },
    },
    small: {
      width: { base: '30px', md: '40px', '2xl': '50px' },
      height: { base: '30px', md: '40px', '2xl': '50px' },
    },
  },

  variants: {
    default: {
      backgroundColor: 'bronzeYellow',
      border: '2px',
      borderColor: 'black',
    },
    primary: {
      backgroundColor: 'inherit',
      border: { base: '1px', md: '2px' },
      borderColor: 'white',
    },
    secondary: {
      backgroundColor: 'bronzeYellow',
    },
    dark: {
      backgroundColor: 'zinnwalditeBrown',
      border: '2px',
      borderColor: 'black',
    },
    light: {
      backgroundColor: 'inherit',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
}
