import Image from 'next/image'
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'

const HeroHomePage = () => {
  return (
    <Box
      as="section"
      top="0px"
      position="relative"
      padding={{
        base: '100px 12px',
        md: '250px 50px 100px 50px',
        '2xl': '310px 138px 222px 138px',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        backgroundColor: 'zinnwalditeBrown',
        zIndex: -1,
      }}
    >
      <Flex
        position="relative"
        flexDirection="column"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '198px', md: '554px', '2xl': '792px' },
          height: { base: '233px', md: '652px', '2xl': '931px' },
          top: { base: '90px', '2xl': '124px' },
          right: '0px',
          backgroundImage: '/images/bigSteak.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        <Heading
          size="extraLarge"
          maxW={{ base: '80%', md: '60%', '2xl': '68%' }}
        >
          Healthy Eating is important part of lifestyle
        </Heading>
        <Text
          pt={{ base: '25px', '2xl': '50px' }}
          maxW={{ base: '135px', md: '550px', '2xl': '840px' }}
          variant="primary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        pt={{ base: '40px', md: '70px', '2xl': '100px' }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          gap={{ base: '20px', md: '40px' }}
        >
          <Text size="extraLarge" variant="primary" transform="rotate(90deg)">
            Scroll
          </Text>
          <Divider
            height={{ base: '80px', md: '270px', '2xl': '406px' }}
            variant="dashed"
            borderLeftWidth="2px"
            borderLeftColor="white"
            orientation="vertical"
            opacity={0.6}
          />
        </Flex>
        <Box
          width={{ base: '214px', md: '598px', '2xl': '854px' }}
          height={{ base: '60px', md: '168px', '2xl': '240px' }}
          position="relative"
          mt={{ base: '0px', md: '130px', '2xl': '225px' }}
          mr={{ base: '65px', md: '200px', '2xl': '285px' }}
          textAlign="center"
        >
          <Image
            fill
            priority
            src="/images/spiceCups.webp"
            alt="spice cups picture"
            sizes="(max-width: 768px) 214px, 60px
            (min-width: 768px) 598px, 168px
            (min-width: 1200px) 854px, 240px"
          />
        </Box>
      </Flex>
      <Flex
        pt={{ base: '20px', md: '80px', '2xl': '157px' }}
        justifyContent="space-between"
      >
        <Flex flexDirection="column">
          <Box
            width={{ base: '180px', md: '554px', '2xl': '792px' }}
            height={{ base: '127px', md: '392px', '2xl': '560px' }}
            position="relative"
          >
            <Image
              fill
              priority
              src="/images/clamSoup.webp"
              alt="clam soup picture"
              sizes="(max-width: 768px) 180px, 127px
              (min-width: 768px) 554px, 392px
              (min-width: 1200px) 792px, 560px"
            />
          </Box>
          <Heading
            as="h3"
            maxW={{ base: '180px', md: '350px', '2xl': '500px' }}
            pt={{ base: '10px', '2xl': '54px' }}
          >
            Start to plan your diet today
          </Heading>
          <Text
            pt={{ base: '15px', '2xl': '54px' }}
            variant="primary"
            maxW={{ base: '180px', md: '390px', '2xl': '565px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          maxW={{ base: '150px', md: '356px', '2xl': '508px' }}
        >
          <Text variant="primary" pb={{ base: '15px', '2xl': '84px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </Text>
          <Box
            width={{ base: '150px', md: '356px', '2xl': '508px' }}
            height={{ base: '210px', md: '497px', '2xl': '710px' }}
            position="relative"
          >
            <Image
              fill
              priority
              src="/images/spiceJar.webp"
              alt="spice jar picture"
              sizes="(max-width: 768px) 150px, 210px
              (min-width: 768px) 356px, 497px
              (min-width: 1200px) 508px, 710px"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default HeroHomePage
