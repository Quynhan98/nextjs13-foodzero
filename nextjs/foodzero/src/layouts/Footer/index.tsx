import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from '@chakra-ui/react'

// Components
import Contact from '@components/Contact'
import Social from '@components/Social'

// Constants
import { BREAKPOINTS, CONTACT, SOCIAL_LIST } from '@constants/index'

const Footer = () => {
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

  return (
    <Box
      as="footer"
      backgroundColor="zinnwalditeBrown"
      pt={{ base: '42px', md: '132px' }}
      pb={{ base: '42px', md: '74px' }}
      padding={{ base: '42px 12px ', md: '132px 0px 74px 0px' }}
    >
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1644px"
        width="100%"
        margin="0 auto"
        mb={{ base: '45px', md: '137px' }}
      >
        <Flex
          justifyContent="space-between"
          width={{ base: '100%', md: '38%' }}
        >
          <Heading
            as="h1"
            maxW={{ base: '100px', md: '188px' }}
            size={{ base: 'small', md: 'default' }}
          >
            Food Zero.
          </Heading>
          <Contact {...CONTACT} />
        </Flex>
        <Box>
          <Text
            variant="primary"
            size={{ base: 'medium', md: 'extraLarge' }}
            pb={{ base: '20px', md: '55px' }}
            pt={{ base: '25px', md: '0px' }}
            fontFamily="Rufina"
          >
            Never Miss a Recipe
          </Text>
          <Flex gap={{ base: '10px', md: '30px' }} pb="10px">
            <Input
              width={{ base: '200px', md: '523px' }}
              variant="primary"
              placeholder="Email Address"
              _placeholder={{ color: 'white' }}
            />
            <Button
              variant="secondary"
              size={{ base: 'small', md: 'default' }}
              fontSize={isMobile ? 'xs' : 'md'}
              lineHeight={isMobile ? 'xs' : 'sm'}
              fontWeight={{ base: 'base', md: 'bold' }}
            >
              Subscribe
            </Button>
          </Flex>
          <Text variant="primary" size="extraSmall" lineHeight="xxs">
            Join our subscribers and get best recipe delivered each week!
          </Text>
        </Box>
      </Flex>
      <Box
        as="hr"
        color="black"
        borderTop="2px dashed white"
        mb={{ base: '20px', md: '58px' }}
      />
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1644px"
        width="100%"
        margin="0 auto"
        gap="20px"
      >
        <Text variant="primary" size={{ base: 'small', md: 'default' }}>
          © 2020 Zero Inc. All rights Reserved
        </Text>
        <UnorderedList
          display="flex"
          pt={{ base: '20px', md: '38px' }}
          gap="18px"
          justifyContent="flex-start"
          alignItems="center"
          marginLeft="0px"
        >
          {SOCIAL_LIST.map((item) => (
            <ListItem key={`social-${item.value}`} listStyleType="none">
              <Social key={item.value} {...item} />
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Box>
  )
}

export default Footer
