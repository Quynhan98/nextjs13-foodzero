import { memo } from 'react'
import { Avatar, Flex, ListItem, UnorderedList } from '@chakra-ui/react'

// Utils
import { formattedDate, formattedHour } from '@utils/index'

interface BlogAvatarProps {
  src: string
  name: string
  date: string
  numberOfComments: number
}

const BlogAvatar = ({ src, name, date, numberOfComments }: BlogAvatarProps) => {
  return (
    <Flex alignItems="center">
      <Avatar name={name} src={src} size={{ base: 'md', md: 'lg' }} />
      <UnorderedList display="flex" gap="30px">
        <ListItem
          listStyleType="none"
          fontSize={{ base: 'xxs', md: 'xs' }}
          color="bronzeYellow"
        >
          {name}
        </ListItem>
        <ListItem
          display={{ base: 'none', md: 'list-item' }}
          fontSize={{ base: 'xxs', md: 'xs' }}
          color="bronzeYellow"
        >
          {formattedDate(date)}
        </ListItem>
        <ListItem
          display={{ base: 'none', md: 'list-item' }}
          fontSize={{ base: 'xxs', md: 'xs' }}
          color="bronzeYellow"
        >
          {formattedHour(date)}
        </ListItem>
        <ListItem fontSize={{ base: 'xxs', md: 'xs' }} color="bronzeYellow">
          {numberOfComments} comments
        </ListItem>
      </UnorderedList>
    </Flex>
  )
}

export default memo(BlogAvatar)
