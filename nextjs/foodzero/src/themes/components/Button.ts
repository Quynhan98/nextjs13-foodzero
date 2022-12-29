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
      pt: { base: '10px', md: '20px' },
      pb: { base: '10px', md: '20px' },
    },
    default: {
      padding: { base: '7px 10px', md: '20px 46px' },
    },
    primary: {
      padding: { base: '10px 48px', md: '20px 95px' },
    },
    small: {
      padding: '7px 10px',
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
