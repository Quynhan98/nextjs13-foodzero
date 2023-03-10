import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Theme
import { rufina } from '@themes/index'

// Utils
import { imageDataUrl } from '@utils/convertToBase64'

const HeroAboutPage = () => {
  return (
    <Flex
      as="section"
      maxW="1920px"
      maxH="1080px"
      padding={{
        base: '90px 12px',
        md: '300px 50px',
        '2xl': '410px 138px 328px 138px',
      }}
      justifyContent="flex-end"
      position="relative"
    >
      <Image
        fill
        priority
        src="/images/aboutBackground.webp"
        alt="background about page"
        placeholder="blur"
        blurDataURL={imageDataUrl(1920, 1080)}
        style={{ zIndex: -1 }}
      />
      <Box maxW={{ base: '80%', md: '60%' }} mr="81px">
        <Heading size="extraLarge">Who We Are</Heading>
        <Text
          pt={{ base: '10px', md: '50px' }}
          variant="primary"
          fontFamily={rufina}
          size="common"
        >
          The most important thing for us is to give you the comfortable dining
          experience
        </Text>
      </Box>
    </Flex>
  )
}

export default HeroAboutPage
