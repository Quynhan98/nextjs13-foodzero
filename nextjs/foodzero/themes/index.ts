import { Rufina, Lato } from '@next/font/google'

import { extendTheme } from '@chakra-ui/react'

// Themes
import { fontSizes, fontWeights, lineHeights } from '@themes/fonts'
import { colors } from '@themes/colors'
import { Heading } from '@themes/components/Heading'
import { Text } from '@themes/components/Text'
import { Input } from '@themes/components/Input'
import { Button } from '@themes/components/Button'

export const rufina = Rufina({
  subsets: ['latin'],
  weight: '700',
})
export const lato = Lato({
  subsets: ['latin'],
  weight: '400',
})

export const customTheme = extendTheme({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  fonts: {
    heading: rufina.style.fontFamily,
    body: lato.style.fontFamily,
  },
  components: {
    Heading,
    Text,
    Input,
    Button,
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px',
  },
})
