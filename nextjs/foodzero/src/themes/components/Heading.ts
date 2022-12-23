import { ComponentStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentStyleConfig = {
  baseStyle: { fontWeight: 'bold' },
  sizes: {
    extraLarge: {
      fontSize: { base: 'md', md: 'xxxl' },
      lineHeight: { base: 'sm', md: 'xxxl' },
    },
    large: {
      fontSize: { base: 'md', md: 'xxl' },
      lineHeight: { base: 'base', md: 'xxl' },
    },
    medium: {
      fontSize: { base: 'common', md: 'xl' },
      lineHeight: { base: 'base', md: 'xl' },
    },
    default: {
      fontSize: { base: 'common', md: 'default' },
      lineHeight: { base: 'base', md: 'lg' },
    },
    base: {
      fontSize: 'lg',
      lineHeight: 'md',
    },
    small: {
      fontSize: 'md',
      lineHeight: 'sm',
    },
    extraSmall: {
      fontSize: 'common',
      lineHeight: 'base',
    },
  },

  variants: {
    primary: {
      color: 'white',
    },
    secondary: {
      color: 'black',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'primary',
  },
}
