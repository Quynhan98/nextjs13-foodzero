import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface CardFeatureProps {
  imageUrl: string
  title: string
  description: string
}

const CardFeature = ({ imageUrl, title, description }: CardFeatureProps) => {
  return (
    <Flex
      maxW="508px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={{ base: '10px', md: '39px' }}
    >
      <Box
        position="relative"
        as="figure"
        width={{ base: '150px', md: '260px' }}
        height={{ base: '150px', md: '260px' }}
      >
        <Image
          src={imageUrl}
          alt={`${title} picture`}
          fill
          sizes="(max-width: 768px) 150px, 150px
                (min-width: 1200px) 260px, 260px"
        />
      </Box>
      <Text
        size={{ base: 'large', md: 'extraLarge' }}
        variant="secondary"
        fontWeight="bold"
        fontFamily="Rufina"
      >
        {title}
      </Text>
      <Text size={{ base: 'small', md: 'default' }} textAlign="center">
        {description}
      </Text>
    </Flex>
  )
}

export default CardFeature
