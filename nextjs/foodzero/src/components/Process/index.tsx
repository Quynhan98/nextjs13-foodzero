import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Constants
import { SOPHISTICATED_PROCESS } from '@constants/index'

const Process = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column', '2xl': 'row' }}
        justifyContent={{ base: 'center', '2xl': 'space-between' }}
        gap={{ base: '10px', '2xl': '102px' }}
        pt={{ base: '30px', '2xl': '174px' }}
        alignItems="center"
        margin={{ base: '0 auto', '2xl': 'unset' }}
      >
        <Box
          width={{ base: '277px', '2xl': '792px' }}
          height={{ base: '233px', '2xl': '638px' }}
          position="relative"
        >
          <Image
            fill
            src={SOPHISTICATED_PROCESS.stepOne.imageUrl}
            alt="split ribs picture"
            sizes="(max-width: 768px) 277px, 233px
(min-width: 1200px) 792px, 638px"
          />
        </Box>
        <Box maxW={{ base: '277px', '2xl': '616px' }}>
          <Heading as="h4" size="medium" variant="secondary">
            01.{SOPHISTICATED_PROCESS.stepOne.title}
          </Heading>
          <Text pt={{ base: '8px', '2xl': '28px' }}>
            {SOPHISTICATED_PROCESS.stepOne.description}
          </Text>
        </Box>
      </Flex>
      <Flex
        pt={{ base: '50px', '2xl': '118px' }}
        flexDirection={{ base: 'column', '2xl': 'row-reverse' }}
        justifyContent="space-between"
      >
        <Box margin={{ base: '0 auto', '2xl': 'unset' }}>
          <Box
            width={{ base: '277px', '2xl': '650px' }}
            height={{ base: '227px', '2xl': '533px' }}
            position="relative"
          >
            <Image
              fill
              src={SOPHISTICATED_PROCESS.stepTwo.imageUrl}
              alt="marinated ribs picture"
              sizes="(max-width: 768px) 277px, 227px
(min-width: 1200px) 650px, 533px"
            />
          </Box>
          <Heading
            as="h4"
            size="medium"
            variant="secondary"
            pt={{ base: '8px', '2xl': '46px' }}
            ml={{ base: '0px', '2xl': '80px' }}
          >
            02.{SOPHISTICATED_PROCESS.stepTwo.title}
          </Heading>
          <Text
            pt={{ base: '8px', '2xl': '28px' }}
            maxW={{ base: '277px', '2xl': '415px' }}
            ml={{ base: '0px', '2xl': '80px' }}
          >
            {SOPHISTICATED_PROCESS.stepTwo.description}
          </Text>
        </Box>
        <Flex
          pl={{ base: '0px', '2xl': '71px' }}
          pt={{ base: '50px', '2xl': '150px' }}
          flexDirection={{ base: 'column-reverse', '2xl': 'column' }}
          margin={{ base: '0 auto', '2xl': 'unset' }}
          gap={{ base: '10px', '2xl': 'unset' }}
        >
          <Box pb={{ base: '20px', '2xl': '46px' }}>
            <Heading as="h4" size="medium" variant="secondary">
              03.{SOPHISTICATED_PROCESS.stepThree.title}
            </Heading>
            <Text
              pt={{ base: '8px', '2xl': '28px' }}
              maxW={{ base: '277px', '2xl': '432px' }}
            >
              {SOPHISTICATED_PROCESS.stepThree.description}
            </Text>
          </Box>
          <Box
            width={{ base: '277px', '2xl': '650px' }}
            height={{ base: '217px', '2xl': '509px' }}
            position="relative"
          >
            <Image
              fill
              src={SOPHISTICATED_PROCESS.stepThree.imageUrl}
              alt="grilled ribs picture"
              sizes="(max-width: 768px) 277px, 217px
(min-width: 1200px) 650px, 509px"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Process
