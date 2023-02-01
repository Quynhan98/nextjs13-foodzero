import { Heading, UnorderedList, ListItem, Box, Text } from '@chakra-ui/react'

// Components
import PriceList from '@components/PriceList'

// Types
import { IOurMenu } from '@self-types/Menu'

export interface IOurMenuProps {
  menu: IOurMenu[]
}

const OurMenu = ({ menu }: IOurMenuProps) => {
  return (
    <Box
      as="section"
      padding={{
        base: '50px 12px',
        md: '100px 50px',
        '2xl': '176px 138px 218px 138px',
      }}
      position="relative"
      minH="100vh"
      _before={{
        content: '""',
        position: 'absolute',
        width: { base: '220px', md: '628px', '2xl': '897px' },
        height: { base: '236px', md: '628px', '2xl': '897px' },
        top: '0px',
        right: '0px',
        backgroundImage: '/images/menuBackground.webp',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    >
      <Heading as="h3" size="large" variant="secondary" pt="54px">
        Our Menu
      </Heading>
      <Text
        pt={{ base: '10px', '2xl': '54px' }}
        maxW={{ md: '490px', '2xl': '532px' }}
      >
        This is a section of your menu. Give your section a brief description
      </Text>
      <UnorderedList
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        listStyleType="none"
        marginLeft="0px"
        pt={{ base: '40px', md: '100px', '2xl': '158px' }}
        gap={{ base: '30px', md: '60px' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        {menu.map((item) => (
          <ListItem
            maxW={{ md: '560px', '2xl': '792px' }}
            key={`menu-${item.id}`}
          >
            <PriceList {...item} />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default OurMenu
