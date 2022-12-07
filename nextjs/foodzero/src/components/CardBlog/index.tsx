import Image from 'next/image'
import { memo } from 'react'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'

// Component
import BlogAvatar from '@components/BlogAvatar'

interface CardBlogProps extends BoxProps {
  imageUrl: string
  title: string
  description: string
  category: string
  srcAvatar: string
  name: string
  date: string
  numberOfComments: number
}

const CardBlog = ({
  imageUrl,
  title,
  description,
  category,
  srcAvatar,
  name,
  date,
  numberOfComments,
  ...rest
}: CardBlogProps) => {
  return (
    <Box position="relative" {...rest}>
      <Box
        position="absolute"
        top="12px"
        right="12px"
        background="bronzeYellow"
        textAlign="center"
        padding={{ base: '5px 20px', md: '7px 53px' }}
      >
        <Heading
          as="h6"
          fontSize={{ base: 'xs', md: 'common' }}
          lineHeight={{ base: 'xs', md: 'sm' }}
          color="white"
        >
          {category}
        </Heading>
      </Box>
      <Image src={imageUrl} alt="blog wallpaper" width={792} height={792} />
      <Box
        padding={{ base: '30px 15px', md: '68px 75px' }}
        textAlign="center"
        margin="0 auto"
      >
        <BlogAvatar
          src={srcAvatar}
          name={name}
          date={date}
          numberOfComments={numberOfComments}
        />
        <Heading
          as="h4"
          size={{ base: 'extraSmall', md: 'base' }}
          variant="secondary"
          pb="18px"
          pt={{ base: '20px', md: '48px' }}
          textAlign="start"
        >
          {title}
        </Heading>
        <Box as="hr" color="black" borderTop="4px dotted black" />
        <Text
          size={{ base: 'small', md: 'default' }}
          pt="18px"
          textAlign="start"
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}

export default memo(CardBlog)
