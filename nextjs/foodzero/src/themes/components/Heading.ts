import { ComponentStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentStyleConfig = {
  baseStyle: { fontWeight: 'bold' },
  sizes: {
    extraLarge: {
      fontSize: { base: 'md', md: 'xl', '2xl': 'xxxl' },
      lineHeight: { base: 'sm', md: 'xl', '2xl': 'xxxl' },
    },
    large: {
      fontSize: { base: 'md', md: 'xl', '2xl': 'xxl' },
      lineHeight: { base: 'base', md: 'xl', '2xl': 'xxl' },
    },
    medium: {
      fontSize: { base: 'common', '2xl': 'xl' },
      lineHeight: { base: 'base', '2xl': 'xl' },
    },
    default: {
      fontSize: { base: 'common', md: 'lg', '2xl': 'default' },
      lineHeight: { base: 'base', md: 'md', '2xl': 'lg' },
    },
    base: {
      fontSize: { base: 'common', md: 'md', '2xl': 'lg' },
      lineHeight: { base: 'base', md: 'sm', '2xl': 'md' },
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
