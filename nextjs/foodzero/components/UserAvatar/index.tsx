import { memo } from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

// Themes
import { rufina } from '@themes/index'

interface UserAvatarProps {
  src: string
  name: string
  job?: string
}

const UserAvatar = ({ src, name, job }: UserAvatarProps) => {
  return (
    <Flex
      alignItems="center"
      gap={{ base: '30px', md: '60px' }}
      maxW="400px"
      width="100%"
    >
      <Avatar
        name={name}
        src={src}
        width={{ base: '80px', md: '170px' }}
        height={{ base: '80px', md: '170px' }}
      />
      <Box>
        <Text
          size="common"
          fontWeight="bold"
          variant="secondary"
          fontFamily={rufina.style.fontFamily}
        >
          {name}
        </Text>
        <Text size="base">{job}</Text>
      </Box>
    </Flex>
  )
}

export default memo(UserAvatar)
