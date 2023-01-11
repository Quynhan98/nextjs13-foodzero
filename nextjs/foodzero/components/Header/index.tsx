import Link from 'next/link'
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

// Constants
import { CONTACT } from '@constants/index'

// Components
import Menu from '@components/Menu'

// Themes
import { rufina } from '@themes/index'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      maxW="1920px"
      padding={{
        base: '12px',
        md: '30px 50px',
        '2xl': '46px 138px 149px 118px',
      }}
      top="0px"
      left="50%"
      transform="translateX(-50%)"
      position="absolute"
      zIndex={1}
    >
      <Flex gap={{ base: '20px', md: '45px' }} alignItems="center">
        <Heading as="h1">
          <Link href="/" prefetch={false}>
            <Image
              src="/images/logo.webp"
              alt="Logo FoodZero"
              priority
              width={307}
              height={115}
            />
          </Link>
        </Heading>
        <IconButton
          data-testid="buttonMenu"
          onClick={onOpen}
          variant="light"
          size="small"
          icon={
            <HamburgerIcon
              boxSize={{ base: '20px', md: '30px', '2xl': '46px' }}
            />
          }
          aria-label="menu"
        />
      </Flex>
      <Flex gap="36px" alignItems="center" ml="20px">
        <Box display={{ base: 'none', md: 'block' }}>
          <Link href={`tel:${CONTACT.phoneNumber}`}>
            <Text size="large" variant="primary">
              {CONTACT.phoneNumber}
            </Text>
          </Link>
        </Box>

        {/* TODO: NextJS 13 - Scroll to #HashID not working in appDir
         * Using an <a> tag when the URL contains a #
         */}
        <a href="#reservationSection">
          <Text
            size="common"
            variant="primary"
            fontWeight="bold"
            fontFamily={rufina}
            border={{ base: '1px', md: '2px' }}
            padding={{ base: '5px 10px', md: '15px 30px', '2xl': '20px 46px' }}
          >
            Reservations
          </Text>
        </a>
      </Flex>
      {isOpen && <Menu isOpen={isOpen} onClose={onClose} />}
    </Container>
  )
}

export default Header
