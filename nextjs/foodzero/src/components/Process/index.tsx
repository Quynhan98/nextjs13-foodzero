import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Constants
import { SOPHISTICATED_PROCESS } from '@constants/index'

const Process = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        gap={{ base: '10px', md: '102px' }}
        pt={{ base: '30px', md: '174px' }}
        alignItems="center"
        margin={{ base: '0 auto', md: 'unset' }}
      >
        <Box
          width={{ base: '277px', md: '792px' }}
          height={{ base: '233px', md: '638px' }}
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
        <Box maxW={{ base: '277px', md: '616px' }}>
          <Heading as="h4" size="medium" variant="secondary">
            01.{SOPHISTICATED_PROCESS.stepOne.title}
          </Heading>
          <Text pt={{ base: '8px', md: '28px' }}>
            {SOPHISTICATED_PROCESS.stepOne.description}
          </Text>
        </Box>
      </Flex>
      <Flex
        pt={{ base: '50px', md: '118px' }}
        flexDirection={{ base: 'column', md: 'row-reverse' }}
        justifyContent="space-between"
      >
        <Box margin={{ base: '0 auto', md: 'unset' }}>
          <Box
            width={{ base: '277px', md: '650px' }}
            height={{ base: '227px', md: '533px' }}
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
            pt={{ base: '8px', md: '46px' }}
            ml={{ base: '0px', md: '80px' }}
          >
            02.{SOPHISTICATED_PROCESS.stepTwo.title}
          </Heading>
          <Text
            pt={{ base: '8px', md: '28px' }}
            maxW={{ base: '277px', md: '415px' }}
            ml={{ base: '0px', md: '80px' }}
          >
            {SOPHISTICATED_PROCESS.stepTwo.description}
          </Text>
        </Box>
        <Flex
          pl={{ base: '0px', md: '71px' }}
          pt={{ base: '50px', md: '150px' }}
          flexDirection={{ base: 'column-reverse', md: 'column' }}
          margin={{ base: '0 auto', md: 'unset' }}
          gap={{ base: '10px', md: 'unset' }}
        >
          <Box pb={{ base: '20px', md: '46px' }}>
            <Heading as="h4" size="medium" variant="secondary">
              03.{SOPHISTICATED_PROCESS.stepThree.title}
            </Heading>
            <Text
              pt={{ base: '8px', md: '28px' }}
              maxW={{ base: '277px', md: '432px' }}
            >
              {SOPHISTICATED_PROCESS.stepThree.description}
            </Text>
          </Box>
          <Box
            width={{ base: '277px', md: '650px' }}
            height={{ base: '217px', md: '509px' }}
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
