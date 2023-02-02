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

export interface IMainsMenuProps {
  menu: IOurMenu[]
}

const MainsMenu = ({ menu }: IMainsMenuProps) => {
  return (
    <Box
      as="section"
      padding={{
        base: '40px 12px',
        md: '80px 50px',
        '2xl': '82px 138px 65px 138px',
      }}
    >
      <Heading as="h3" size="large" variant="secondary" textAlign="center">
        Mains
      </Heading>
      <Text pt="18px" textAlign="center">
        This is a section of your menu. Give your section a brief description
      </Text>
      <Flex
        pt={{ base: '40px', md: '81px' }}
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        gap={{ base: '30px', md: '102px' }}
        margin="0 auto"
      >
        <UnorderedList
          listStyleType="none"
          marginLeft="0px"
          display="flex"
          flexDirection="column"
          gap={{ base: '30px', '2xl': '60px' }}
          maxW="792px"
          minW={{ base: '100%', md: '45%' }}
        >
          {menu.map((item) => (
            <ListItem key={`mains-${item.id}`}>
              <PriceList {...item} />
            </ListItem>
          ))}
        </UnorderedList>
        <Box
          width={{ base: '277px', md: '554px', '2xl': '792px' }}
          height={{ base: '314px', md: '629px', '2xl': '898px' }}
          position="relative"
          margin="0 auto"
        >
          <Image
            fill
            src="/images/steak.webp"
            alt="excellent cook picture"
            sizes="(max-width: 768px) 277px, 314px
                (min-width: 768px) 554px, 629px
                (min-width: 1200px) 792px, 898px"
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default MainsMenu
