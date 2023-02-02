import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Utils
import { imageDataUrl } from '@utils/convertToBase64'

const Chef = () => {
  return (
    <Box
      as="section"
      padding={{
        base: '50px 12px',
        md: '140px 50px 0px 50px',
        '2xl': '240px 138px 0px 110px',
      }}
      backgroundColor="alabaster"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        width: { base: '100px', md: '280px', '2xl': '400px' },
        height: { base: '80px', md: '232px', '2xl': '320px' },
        top: { base: '30px', md: '80px', '2xl': '135px' },
        left: { base: '12px', md: '40px', '2xl': '85px' },
        backgroundImage: '/images/leafLeft.webp',
        backgroundSize: 'cover',
        objectFit: 'cover',
        zIndex: 1,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        width: { base: '113px', md: '315px', '2xl': '450px' },
        height: { base: '98px', md: '273px', '2xl': '390px' },
        bottom: { base: '20px', md: '25px', '2xl': '30px' },
        right: { base: '12px', md: '50px', '2xl': '138px' },
        backgroundImage: '/images/leafRight.webp',
        backgroundSize: 'cover',
        objectFit: 'cover',
        zIndex: 1,
      }}
    >
      <Flex
        gap={{ base: '10px', '2xl': '61px' }}
        justifyContent="space-between"
      >
        <Box
          mt="20px"
          width={{ base: '147px', md: '686px', '2xl': '980px' }}
          height={{ base: '133px', md: '623px', '2xl': '890px' }}
          position="relative"
          zIndex={2}
        >
          <Image
            fill
            src="/images/excellentCook.webp"
            alt="excellent cook picture"
            sizes="(max-width: 768px) 147px, 133px
              (min-width: 768px) 686px, 623px
              (min-width: 1200px) 980px, 890px"
            placeholder="blur"
            blurDataURL={imageDataUrl(980, 890)}
          />
        </Box>
        <Box maxW={{ base: '200px', md: '450px', '2xl': '620px' }}>
          <Heading as="h3" size="large" variant="secondary">
            Excellent cook
          </Heading>
          <Text pt="18px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Chef
