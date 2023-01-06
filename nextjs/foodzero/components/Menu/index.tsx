import { memo } from 'react'
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
} from '@chakra-ui/react'

// Component
import Contact from '@components/Contact'
import Navigation from '@components/Navigation'

// Constants
import { NAV_LIST, CONTACT } from '@constants/variables'

interface IMenuProps {
  isOpen: boolean
  onClose: () => void
}

const Menu = ({ isOpen, onClose }: IMenuProps) => {
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
}

export default memo(Menu)
