import { extendTheme } from '@chakra-ui/react'

// Themes
import { fontSizes, fontWeights, lineHeights } from '@themes/fonts'
import { colors } from '@themes/colors'
import { Heading } from '@themes/components/Heading'
import { Text } from '@themes/components/Text'

export const customTheme = extendTheme({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  fonts: {
    heading: `'Rufina', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  components: {
    Heading,
    Text,
  },
})
