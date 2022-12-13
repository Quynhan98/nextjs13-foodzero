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
      padding: { base: '10px 23px', md: '20px 46px' },
    },
    primary: {
      padding: { base: '10px 48px', md: '20px 95px' },
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
      border: '2px',
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
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
}
