import Image from 'next/image'
import {
  Box,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Text,
} from '@chakra-ui/react'

// Components
import PriceList from '@components/PriceList'

// Types
import { IOurMenu } from '@self-types/Menu'

export interface IDrinksMenuProps {
  menu: IOurMenu[]
}

const DrinksMenu = ({ menu }: IDrinksMenuProps) => {
  return (
    <Box
      as="section"
      padding={{
        base: '50px 12px',
        md: '80px 50px',
        '2xl': '122px 138px 140px 138px',
      }}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        width: { base: '87px', md: '244px', '2xl': '348px' },
        height: { base: '104px', md: '290px', '2xl': '415px' },
        top: '0px',
        left: '45%',
        backgroundImage: '/images/avocado.webp',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    >
      <Heading as="h3" size="large" variant="secondary" textAlign="center">
        Pastries & Drinks
      </Heading>
      <Text pt="18px" textAlign="center">
        This is a section of your menu. Give your section a brief description
      </Text>
      <Flex
        pt={{ base: '50px', md: '159px' }}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        gap={{ base: '30px', md: '102px' }}
      >
        <Box
          width={{ base: '277px', md: '554px', '2xl': '792px' }}
          height={{ base: '314px', md: '629px', '2xl': '898px' }}
          position="relative"
          margin="0 auto"
        >
          <Image
            fill
            src="/images/lemonTea.webp"
            alt="excellent cook picture"
            sizes="(max-width: 768px) 277px, 314px
                (min-width: 768px) 554px, 629px
                (min-width: 1200px) 792px, 898px"
          />
        </Box>
        <UnorderedList
          listStyleType="none"
          marginLeft="0px"
          display="flex"
          flexDirection="column"
          gap={{ base: '30px', md: '60px' }}
          maxW="792px"
          minW={{ base: '100%', md: '45%' }}
        >
          {menu.map((item) => (
            <ListItem key={`pastries-and-drinks-${item.id}`}>
              <PriceList {...item} />
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Box>
  )
}

export default DrinksMenu
