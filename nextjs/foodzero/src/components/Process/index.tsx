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
          width={{ base: '277px', md: '634px', '2xl': '792px' }}
          height={{ base: '233px', md: '447px', '2xl': '638px' }}
          position="relative"
        >
          <Image
            fill
            src={SOPHISTICATED_PROCESS.stepOne.imageUrl}
            alt="split ribs picture"
            sizes="(max-width: 768px) 277px, 233px
              (min-width: 768px) 634px, 447px
              (min-width: 1200px) 792px, 638px"
          />
        </Box>
        <Box maxW={{ base: '90%', md: '38%' }}>
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
        <Box>
          <Box
            width={{ base: '277px', md: '455px', '2xl': '650px' }}
            height={{ base: '227px', md: '373px', '2xl': '533px' }}
            position="relative"
            margin="0 auto"
          >
            <Image
              fill
              src={SOPHISTICATED_PROCESS.stepTwo.imageUrl}
              alt="marinated ribs picture"
              sizes="(max-width: 768px) 277px, 227px
                (min-width: 768px) 455px, 373px
                (min-width: 1200px) 650px, 533px"
            />
          </Box>
          <Heading
            as="h4"
            size="medium"
            variant="secondary"
            maxW={{ base: '90%', md: '455px', '2xl': '650px' }}
            pt={{ base: '8px', md: '46px' }}
            pl={{ base: '0px', md: '40px', '2xl': '80px' }}
            margin={{ base: '0 auto', md: 'unset' }}
          >
            02.{SOPHISTICATED_PROCESS.stepTwo.title}
          </Heading>
          <Text
            pt={{ base: '8px', md: '28px' }}
            maxW={{ base: '90%', md: '455px', '2xl': '650px' }}
            pl={{ base: '0px', md: '40px', '2xl': '80px' }}
            margin={{ base: '0 auto', md: 'unset' }}
          >
            {SOPHISTICATED_PROCESS.stepTwo.description}
          </Text>
        </Box>
        <Flex
          pl={{ base: '0px', md: '71px' }}
          pt={{ base: '50px', md: '150px' }}
          flexDirection={{ base: 'column-reverse', md: 'column' }}
          gap={{ base: '10px', md: 'unset' }}
        >
          <Box
            margin={{ base: '0 auto', md: 'unset' }}
            pb={{ base: '20px', md: '46px' }}
            maxW={{ base: '90%', md: '455px', '2xl': '625px' }}
          >
            <Heading as="h4" size="medium" variant="secondary">
              03.{SOPHISTICATED_PROCESS.stepThree.title}
            </Heading>
            <Text pt={{ base: '8px', md: '28px' }}>
              {SOPHISTICATED_PROCESS.stepThree.description}
            </Text>
          </Box>
          <Box
            width={{ base: '277px', md: '455px', '2xl': '650px' }}
            height={{ base: '217px', md: '356px', '2xl': '509px' }}
            position="relative"
            margin="0 auto"
          >
            <Image
              fill
              src={SOPHISTICATED_PROCESS.stepThree.imageUrl}
              alt="grilled ribs picture"
              sizes="(max-width: 768px) 277px, 217px
                (min-width: 768px) 455px, 356px
                (min-width: 1200px) 650px, 509px"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Process
