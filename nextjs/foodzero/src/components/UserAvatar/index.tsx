import { memo } from 'react'
import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'

interface UserAvatarProps {
  src: string
  name: string
  job?: string
}

const UserAvatar = ({ src, name, job }: UserAvatarProps) => {
  return (
    <Flex alignItems="center" gap={{ base: '30px', md: '60px' }}>
      <Avatar
        name={name}
        src={src}
        width={{ base: '80px', md: '170px' }}
        height={{ base: '80px', md: '170px' }}
      />
      <Box>
        <Heading
          as="h5"
          variant="secondary"
          size={{ base: 'extraSmall', md: 'small' }}
        >
          {name}
        </Heading>
        <Text size={{ base: 'small', md: 'base' }}>{job}</Text>
      </Box>
    </Flex>
  )
}

export default memo(UserAvatar)
