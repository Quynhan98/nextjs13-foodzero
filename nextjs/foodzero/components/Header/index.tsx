'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

// Constants
import { CONTACT, NAV_LIST } from '@constants/index'

// Components
import Navigation from '@components/Navigation'
import Contact from '@components/Contact'

const Header = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handClickReservationBtn = () => {
    router.push('#reservationSection')
  }

  const renderModalMenu = useMemo(() => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        data-testid="menuModal"
      >
        <ModalContent
          backgroundImage="/images/backgroundNavigation.webp"
          backgroundSize="cover"
          objectFit="cover"
          maxW="1920px"
          maxH="1080px"
          padding={{
            base: '50px 20px',
            md: '150px',
            '2xl': '222px 186px 20px 300px',
          }}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            backgroundColor: 'zinnwalditeBrown',
            opacity: '0.8',
            zIndex: -1,
          }}
        >
          <ModalCloseButton
            position="absolute"
            left={{ base: '15px', md: '50px' }}
            top={{ base: '15px', md: '40px' }}
            color="silverFoil"
            fontSize={{ base: '20px', '2xl': '30px' }}
          />
          <ModalBody
            display="flex"
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
            flexDirection={{ base: 'column', md: 'row' }}
            gap="60px"
          >
            <Navigation onClick={onClose} navList={NAV_LIST} />
            <Flex
              width="100%"
              justifyContent="flex-end"
              pt={{ base: '0px', md: '120px', '2xl': '335px' }}
            >
              <Contact {...CONTACT} isShowIcon />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  }, [isOpen])

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
            <Box
              width={{ base: '134px', lg: '307px' }}
              height={{ base: '50px', lg: '115px' }}
              position="relative"
            >
              <Image
                src="/images/logo.webp"
                alt="Logo FoodZero"
                priority
                fill
                sizes="(max-width: 768px) 307px, 115px
                (min-width: 768px) 134px, 50px
                (min-width: 1200px) 307px, 115px"
              />
            </Box>
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
      <Flex gap="36px" alignItems="center">
        <Box display={{ base: 'none', md: 'block' }}>
          <Link href={`tel:${CONTACT.phoneNumber}`}>
            <Text size="large" variant="primary">
              {CONTACT.phoneNumber}
            </Text>
          </Link>
        </Box>
        <Button
          onClick={handClickReservationBtn}
          variant="primary"
          fontWeight={{ base: 'normal', md: 'bold' }}
        >
          Reservations
        </Button>
      </Flex>
      {isOpen && renderModalMenu}
    </Container>
  )
}

export default Header
