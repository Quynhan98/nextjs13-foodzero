import Image from 'next/image'
import { Box, Heading, Text } from '@chakra-ui/react'

// Themes
import { rufina } from '@themes/index'

// Utils
import { imageDataUrl } from '@utils/convertToBase64'

const HeroMenuPage = () => {
  return (
    <Box
      as="section"
      maxW="1920px"
      maxH="1080px"
      padding={{
        base: '100px 12px',
        md: '250px 50px 150px 50px',
        '2xl': '350px 138px 328px 138px',
      }}
      position="relative"
    >
      <Image
        fill
        priority
        src="/images/newMenuBackground.webp"
        alt="background menu page"
        placeholder="blur"
        blurDataURL={imageDataUrl(1920, 1080)}
        style={{ zIndex: -1 }}
      />
      <Heading size="extraLarge" maxW={{ base: '90%', md: '48%' }}>
        View Our New Menu
      </Heading>
      <Text
        pt={{ base: '10px', md: '50px' }}
        maxW={{ base: '60%', md: '50%' }}
        variant="primary"
        fontFamily={rufina}
        size="common"
      >
        The freshest ingredients for you every day
      </Text>
    </Box>
  )
}

export default HeroMenuPage
