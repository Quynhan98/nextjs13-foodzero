import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Constants
import { LEADER_SHIP } from '@constants/index'

const Staff = () => {
  return (
    <Box
      as="section"
      padding={{
        base: '0px 12px 80px 0px',
        md: '0px 50px 190px 50px',
        '2xl': '0 138px 299px 138px',
      }}
    >
      {/* Restaurant Manager */}
      <Flex
        pl={{ base: 'unset', md: '33px' }}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'unset' }}
        gap={{ base: '10px', md: '90px', '2xl': '111px' }}
      >
        <Flex flexDirection="column" gap={{ base: '10px', '2xl': '24px' }}>
          <Heading as="h4" variant="secondary" textAlign="center">
            Restaurant Manager
          </Heading>
          <Text textAlign="center">{LEADER_SHIP.restaurantManager.name}</Text>
          <Box
            width={{ base: '254px', md: '508px', '2xl': '726px' }}
            height={{ base: '301px', md: '571px', '2xl': '861px' }}
            position="relative"
            margin="0 auto"
          >
            <Image
              fill
              src={LEADER_SHIP.restaurantManager.avatar}
              alt="Restaurant manager avatar"
              sizes="(max-width: 768px) 254px, 301px
                  (min-width: 768px) 508px, 571px
                  (min-width: 1200px) 726px, 861px"
            />
          </Box>
        </Flex>
        <Text
          pt={{ base: '10px', md: '110px', '2xl': '160px' }}
          maxW={{ base: '90%', md: '30%' }}
          margin={{ base: '0 auto', md: 'unset' }}
        >
          {LEADER_SHIP.restaurantManager.description}
        </Text>
      </Flex>

      {/* Executive Chef */}
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent={{ base: 'center', md: 'flex-end' }}
        alignItems={{ base: 'center', md: 'end' }}
        gap={{ base: '10px', md: '90px', '2xl': '111px' }}
        mt={{ base: '30px', md: '-300px', '2xl': '-438px' }}
        pr={{ base: 'unset', md: '38px' }}
      >
        <Text
          pt={{ base: '10px', md: '160px' }}
          maxW={{ base: '90%', md: '30%' }}
          margin={{ base: '0 auto', md: 'unset' }}
          textAlign={{ base: 'start', md: 'end' }}
        >
          {LEADER_SHIP.executiveChef.description}
        </Text>
        <Flex flexDirection="column" gap={{ base: '10px', md: '24px' }}>
          <Heading as="h4" variant="secondary" textAlign="center">
            Executive Chef
          </Heading>
          <Text textAlign="center">{LEADER_SHIP.executiveChef.name}</Text>
          <Box
            width={{ base: '254px', md: '508px', '2xl': '726px' }}
            height={{ base: '301px', md: '571px', '2xl': '861px' }}
            position="relative"
          >
            <Image
              fill
              src={LEADER_SHIP.executiveChef.avatar}
              alt="Executive chef avatar"
              sizes="(max-width: 768px) 254px, 301px
                  (min-width: 768px) 508px, 571px
                  (min-width: 1200px) 726px, 861px"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Staff
