import { memo } from 'react'
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'

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
      <UnorderedList
        display="flex"
        justifyContent="space-between"
        gap={{ base: '20px', md: '133px' }}
        pt={{ base: '20px', md: '38px' }}
        listStyleType="none"
        marginLeft="0px"
      >
        <ListItem>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            Brunch
          </Text>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            {brunch}
          </Text>
        </ListItem>
        <ListItem>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            Lunch
          </Text>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            {lunch}
          </Text>
        </ListItem>
        <ListItem>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            Dinner
          </Text>
          <Text variant="primary" size={{ base: 'small', md: 'default' }}>
            {dinner}
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default memo(OpenTime)
