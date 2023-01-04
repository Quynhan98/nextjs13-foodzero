import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  sizes: {
    extraLarge: {
      fontSize: { base: 'base', md: 'md', '2xl': 'lg' },
      lineHeight: { base: 'base', md: 'sm', '2xl': 'md' },
    },
    large: {
      fontSize: { base: 'xs', md: 'base', '2xl': 'common' },
      lineHeight: { base: 'xs', md: 'base', '2xl': 'base' },
    },
    common: {
      fontSize: { base: 'xs', md: 'sm', '2xl': 'md' },
      lineHeight: { base: 'xs', md: 'base', '2xl': 'sm' },
    },
    default: {
      fontSize: { base: 'xxs', md: 'base', '2xl': 'sm' },
      lineHeight: { base: 'xxs', md: 'base', '2xl': 'base' },
    },
    medium: {
      fontSize: 'base',
      lineHeight: 'base',
    },
    base: {
      fontSize: { base: 'xxs', md: 'xs' },
      lineHeight: { base: 'xxs', md: 'xs' },
    },
    small: {
      fontSize: 'xxs',
      lineHeight: 'xxs',
    },
  },

  variants: {
    default: {
      color: 'darkLiver',
    },
    primary: {
      color: 'white',
    },
    secondary: {
      color: 'black',
    },
    appleGreen: {
      color: 'appleGreen',
    },
    bronzeYellow: {
      color: 'bronzeYellow',
    },
    warning: {
      color: 'warning',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
}
