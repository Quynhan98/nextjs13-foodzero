import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  sizes: {
    extraLarge: {
      fontSize: { base: 'base', md: 'lg' },
      lineHeight: { base: 'base', md: 'md' },
    },
    large: {
      fontSize: 'common',
      lineHeight: 'base',
    },
    common: {
      fontSize: { base: 'xs', md: 'md' },
      lineHeight: { base: 'xs', md: 'sm' },
    },
    default: {
      fontSize: { base: 'xxs', md: 'sm' },
      lineHeight: { base: 'xxs', md: 'base' },
    },
    medium: {
      fontSize: 'base',
      lineHeight: 'base',
    },
    base: {
      fontSize: 'xs',
      lineHeight: 'xs',
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
