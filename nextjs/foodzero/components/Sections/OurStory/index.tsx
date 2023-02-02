import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Utils
import { imageDataUrl } from '@utils/convertToBase64'

const OurStory = () => {
  return (
    <Box
      as="section"
      padding={{
        base: '80px 12px',
        md: '190px 50px',
        '2xl': '218px 138px 279px 138px',
      }}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        width: { base: '107px', md: '249px', '2xl': '355px' },
        height: { base: '91px', md: '210px', '2xl': '300px' },
        top: { base: '20px', md: '112px' },
        left: { base: '38%', md: '40%', '2xl': '35%' },
        backgroundImage: '/images/tomato.webp',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    >
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems="center"
        gap={{ base: '30px', md: '102px' }}
      >
        <Box
          pl={{ base: '10px', md: '77px' }}
          pt={{ base: '0px', md: '80px', '2xl': '150px' }}
        >
          <Heading as="h3" size="large" variant="secondary">
            Our Story
          </Heading>
          <Text pt="18px" maxW="668px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </Text>
        </Box>
        <Box
          width={{ base: '277px', md: '634px', '2xl': '792px' }}
          height={{ base: '198px', md: '454px', '2xl': '567px' }}
          position="relative"
        >
          <Image
            fill
            src="/images/cooking.webp"
            alt="cooking picture"
            sizes="(max-width: 768px) 277px, 198px
            (min-width: 768px) 634px, 454px
            (min-width: 1200px) 792px, 567px"
            placeholder="blur"
            blurDataURL={imageDataUrl(792, 567)}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default OurStory
