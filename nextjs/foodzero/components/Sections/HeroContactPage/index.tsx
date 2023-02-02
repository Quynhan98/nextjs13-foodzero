import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import OpenTime from '@components/OpenTime'

// Constants
import { OPEN_TIME } from '@constants/variables'

// Themes
import { rufina } from '@themes/index'

const HeroContactPage = () => {
  return (
    <Box
      as="section"
      backgroundImage="/images/contactBackground.webp"
      backgroundSize="cover"
      objectFit="cover"
      maxW="1920px"
      maxH="1080px"
      padding={{
        base: '90px 12px',
        md: '300px 50px 100px 50px',
        '2xl': '415px 138px 130px 138px',
      }}
    >
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
