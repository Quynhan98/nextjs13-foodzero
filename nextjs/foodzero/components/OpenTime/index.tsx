import { memo } from 'react'
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'

// Themes
import { rufina } from '@themes/index'

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
    <Box minW={{ base: '90%', md: '42%' }}>
      <Flex
        justifyContent="space-between"
        pb={{ base: '20px', md: '38px' }}
        alignItems="center"
      >
        <Text
          variant="primary"
          size="common"
          fontWeight="bold"
          fontFamily={rufina}
        >
          Open Time
        </Text>
        <Text variant="primary">{openTime}</Text>
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
            <Text variant="primary">{item.meal}</Text>
            <Text variant="primary">{item.time}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default memo(OpenTime)
