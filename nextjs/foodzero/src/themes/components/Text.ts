import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  sizes: {
    large: {
      fontSize: 'common',
      lineHeight: 'base',
    },
    default: {
      fontSize: 'sm',
      lineHeight: 'base',
    },
    medium: {
      fontSize: 'base',
      lineHeight: 'base',
    },
    base: {
      fontSize: 'xs',
      lineHeight: 'xs',
    },
    mall: {
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
