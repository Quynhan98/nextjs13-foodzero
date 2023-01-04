import { memo } from 'react'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'

interface PriceListProps extends BoxProps {
  price: number
  name: string
  description: string
}

const PriceList = ({ price, name, description, ...rest }: PriceListProps) => {
  return (
    <Box {...rest}>
      <Heading
        as="h4"
        variant="secondary"
        size={{ base: 'small', '2xl': 'base' }}
        paddingBottom={{ base: '6px', '2xl': '12px' }}
        textAlign="right"
      >
        ${price}
      </Heading>
      <Box as="hr" color="black" borderTop="4px dotted black" />
      <Heading
        as="h3"
        variant="secondary"
        size={{ base: 'small', '2xl': 'default' }}
        padding={{ base: '10px 0px', '2xl': '24px 0px' }}
      >
        {name}
      </Heading>
      <Text size={{ base: 'base', '2xl': 'default' }}>{description}</Text>
    </Box>
  )
}

export default memo(PriceList)
