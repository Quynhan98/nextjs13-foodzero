import { Box, Heading, Text } from '@chakra-ui/react'

// Themes
import { rufina } from '@themes/index'

const HeroMenuPage = () => {
  return (
    <Box
      as="section"
      backgroundImage="/images/newMenuBackground.webp"
      backgroundSize="cover"
      objectFit="cover"
      maxW="1920px"
      maxH="1080px"
      padding={{
        base: '100px 12px',
        md: '250px 50px 150px 50px',
        '2xl': '350px 138px 328px 138px',
      }}
    >
      <Heading size="extraLarge" maxW={{ base: '90%', md: '45%' }}>
        View Our New Menu
      </Heading>
      <Text
        pt={{ base: '10px', md: '50px' }}
        maxW={{ base: '80%', md: '50%' }}
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
