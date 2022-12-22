import { memo } from 'react'
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'

type BusinessHours = {
  meal: string
  time: string
}

interface OpenTimeProps {
  openTime: string
  businessHours: BusinessHours[]
}

const OpenTime = ({ openTime, businessHours }: OpenTimeProps) => {
  return (
    <Box minW="310px" maxW="696px">
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
        {businessHours.map((item) => (
          <ListItem key={`business-hours-${item.meal}`}>
            <Text variant="primary" size={{ base: 'small', md: 'default' }}>
              {item.meal}
            </Text>
            <Text variant="primary" size={{ base: 'small', md: 'default' }}>
              {item.time}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default memo(OpenTime)
