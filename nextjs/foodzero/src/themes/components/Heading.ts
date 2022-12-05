import { ComponentStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentStyleConfig = {
  sizes: {
    extraLarge: {
      fontSize: 'xxxl',
      fontWeight: 'bold',
      lineHeight: 'xxxl',
    },
    large: {
      fontSize: 'xxl',
      fontWeight: 'bold',
      lineHeight: 'xxl',
    },
    medium: {
      fontSize: 'xl',
      fontWeight: 'bold',
      lineHeight: 'xl',
    },
    default: {
      fontSize: 'default',
      fontWeight: 'bold',
      lineHeight: 'lg',
    },
    base: {
      fontSize: 'lg',
      fontWeight: 'bold',
      lineHeight: 'md',
    },
    mall: {
      fontSize: 'md',
      fontWeight: 'bold',
      lineHeight: 'sm',
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
