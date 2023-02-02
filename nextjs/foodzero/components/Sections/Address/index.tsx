import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/react'

// Constants
import { CONTACT } from '@constants/variables'

// Themes
import { rufina } from '@themes/index'

const Address = () => {
  return (
    <Box
      as="section"
      padding={{
        base: '80px 12px',
        md: '170px 50px',
        '2xl': '272px 138px 186px 138px',
      }}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        width: { base: '134px', md: '312px', '2xl': '446px' },
        height: { base: '117px', md: '274px', '2xl': '391px' },
        top: { base: '10px', md: '100px', '2xl': '152px' },
        left: { base: '65%', md: '40%' },
        backgroundImage: '/images/orange.webp',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    >
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'unset' }}
        alignItems="center"
        gap={{ base: '20px', md: '150px', '2xl': '202px' }}
      >
        <Box
          width={{ base: '277px', md: '544px', '2xl': '792px' }}
          height={{ base: '208px', md: '415px', '2xl': '593px' }}
          position="relative"
        >
          <Image
            fill
            src="/images/dinnerTable.webp"
            alt="excellent cook picture"
            sizes="(max-width: 768px) 277px, 208px
            (min-width: 768px) 544px, 415px
            (min-width: 1200px) 792px, 593px"
          />
        </Box>
        <Text
          pt={{ base: '0px', md: '190px', '2xl': '230px' }}
          size="common"
          fontFamily={rufina}
          fontWeight="bold"
          variant="secondary"
          maxW="507px"
        >
          We can be contacted <br /> via email{' '}
          <Link
            prefetch={false}
            href={`mailto:${CONTACT.email}`}
            style={{ textDecoration: 'none' }}
          >
            <Text as="b" size="common" variant="appleGreen">
              {CONTACT.email}
            </Text>
          </Link>
          <br />
          or telephone on{' '}
          <Link
            style={{ textDecoration: 'none' }}
            href={`tel:${CONTACT.phoneNumber}`}
            prefetch={false}
          >
            <Text as="b" size="common" variant="appleGreen">
              {CONTACT.phoneNumber}
            </Text>
          </Link>
        </Text>
      </Flex>
      <Flex
        pt={{ base: '60px', md: '145px' }}
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems="center"
        gap={{ base: '20px', md: '60px' }}
        ml={{ base: '0px', md: '44px' }}
      >
        <Text
          size="common"
          fontFamily={rufina}
          fontWeight="bold"
          variant="secondary"
          maxW={{ base: '277px', md: '45%' }}
        >
          We are located in {CONTACT.address}
        </Text>
        <Box
          width={{ base: '277px', md: '554px', '2xl': '792px' }}
          height={{ base: '347px', md: '630px', '2xl': '990px' }}
          position="relative"
        >
          <Image
            fill
            src="/images/address.webp"
            alt="excellent cook picture"
            sizes="(max-width: 768px) 277px, 347px
            (min-width: 768px) 554px, 630px
            (min-width: 1200px) 792px, 990px"
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Address
