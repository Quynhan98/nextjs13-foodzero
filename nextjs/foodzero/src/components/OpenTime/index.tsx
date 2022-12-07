import { memo } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

interface OpenTimeProps {
  openTime: string
  brunch: string
  lunch: string
  dinner: string
}

const OpenTime = ({ openTime, brunch, lunch, dinner }: OpenTimeProps) => {
  return (
    <Box minW="310px">
      <Flex
        justifyContent="space-between"
        pb={{ base: '20px', md: '38px' }}
        alignItems="center"
      >
        <Text
          variant="primary"
          fontSize={{ base: 'base', md: 'md' }}
          fontWeight="bold"
          fontFamily="Rufina"
        >
          Open Time
        </Text>
        <Text variant="primary" size={{ base: 'small', md: 'default' }}>
          {openTime}
        </Text>
      </Flex>
      <Box as="hr" color="black" borderTop="2px dashed white" />
      <Flex
        justifyContent="space-between"
        gap={{ base: '20px', md: '133px' }}
        pt={{ base: '20px', md: '38px' }}
      >
        <Box>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            Brunch
          </Text>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            {brunch}
          </Text>
        </Box>
        <Box>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            Lunch
          </Text>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            {lunch}
          </Text>
        </Box>
        <Box>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            Dinner
          </Text>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            {dinner}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default memo(OpenTime)
