import { Box, ListItem, UnorderedList } from '@chakra-ui/react'

// Components
import CardFeature from '@components/CardFeature'

// Constants
import { FEATURES_SECTION } from '@constants/variables'

const Features = () => {
  return (
    <Box
      as="section"
      padding={{
        base: '70px 12px',
        md: '120px 50px',
        '2xl': '207px 138px 190px 138px',
      }}
    >
      <UnorderedList
        display="flex"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        listStyleType="none"
        marginLeft="0px"
        gap="30px"
      >
        {FEATURES_SECTION.map((item) => (
          <ListItem key={`feature-${item.id}`}>
            <CardFeature {...item} />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default Features
