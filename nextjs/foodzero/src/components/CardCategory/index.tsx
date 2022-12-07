import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/react'

interface CardCategoryProps {
  href: string
  category: string
  imageUrl: string
}

const CardCategory = ({ href, category, imageUrl }: CardCategoryProps) => {
  return (
    <Box position="relative" maxW="508px" maxH="711px">
      <Flex
        position="absolute"
        zIndex="1"
        width="100%"
        justifyContent="space-between"
        padding={{ base: '25px 20px', md: '50px 45px' }}
      >
        <Text
          size={{ base: 'large', md: 'extraLarge' }}
          variant="secondary"
          fontWeight="bold"
          fontFamily="Rufina"
        >
          {category}
        </Text>
        <Link href={href}>
          <Image
            width={46}
            height={26}
            src="/images/rightArrow.webp"
            alt="right arrow icon"
          />
        </Link>
      </Flex>
      <Image
        src={imageUrl}
        alt="background of the category card"
        width={508}
        height={711}
      />
    </Box>
  )
}

export default memo(CardCategory)
