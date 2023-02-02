import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import OpenTime from '@components/OpenTime'

// Constants
import { OPEN_TIME } from '@constants/variables'

// Themes
import { rufina } from '@themes/index'

// Utils
import { imageDataUrl } from '@utils/convertToBase64'

const HeroContactPage = () => {
  return (
    <Box
      as="section"
      maxW="1920px"
      maxH="1080px"
      padding={{
        base: '90px 12px',
        md: '300px 50px 100px 50px',
        '2xl': '415px 138px 130px 138px',
      }}
      position="relative"
    >
      <Image
        fill
        priority
        src="/images/contactBackground.webp"
        alt="background contact page"
        placeholder="blur"
        blurDataURL={imageDataUrl(1920, 1080)}
        style={{ zIndex: -1 }}
      />
      <Heading size="extraLarge" maxW={{ base: '100%', md: '60%' }}>
        Get in Touch
      </Heading>
      <Text
        pt={{ base: '10px', '2xl': '50px' }}
        maxW="80%"
        variant="primary"
        fontFamily={rufina}
        size="common"
      >
        The freshest ingredients for you every day
      </Text>
      <Flex
        pt={{ base: '60px', md: '93px' }}
        justifyContent={{ base: 'center', md: 'flex-end' }}
      >
        <OpenTime {...OPEN_TIME} />
      </Flex>
    </Box>
  )
}

export default HeroContactPage
