import {
  Box,
  Center,
  Heading,
  ListItem,
  UnorderedList,
  Text,
} from '@chakra-ui/react'

// Components
import CardCategory from '@components/CardCategory'

// Constants
import { CATEGORY_SECTION } from '@constants/variables'

const Category = () => {
  return (
    <Box
      as="section"
      padding={{
        base: '60px 12px',
        md: '100px 50px',
        '2xl': '128px 138px 136px 138px',
      }}
    >
      <Center flexDirection="column">
        <Heading
          as="h3"
          size="large"
          variant="secondary"
          maxW={{ base: '350px', md: '800px', '2xl': '1100px' }}
          textAlign="center"
        >
          Calories Energy Balance
        </Heading>
        <Text pt="18px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Center>
      <UnorderedList
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        listStyleType="none"
        marginLeft="0px"
        pt={{ base: '50px', '2xl': '126px' }}
        gap="30px"
      >
        {CATEGORY_SECTION.map((item) => (
          <ListItem key={`category-${item.id}`}>
            <CardCategory {...item} />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default Category
