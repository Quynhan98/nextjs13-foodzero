import { Box, ListItem, UnorderedList } from '@chakra-ui/react'

// Components
import CardBlog from '@components/CardBlog'

// Types
import { IPost } from '@self-types/Post'

export interface IRecentPostProps {
  posts: IPost[]
}

const RecentPost = ({ posts }: IRecentPostProps) => {
  return (
    <Box
      as="section"
      padding={{
        base: '50px 12px',
        md: '80px 50px',
        '2xl': '130px 138px 105px 138px',
      }}
    >
      <UnorderedList
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        listStyleType="none"
        marginLeft="0px"
        gap="30px"
      >
        {posts.map((item) => (
          <ListItem maxW="792px" key={`blog-${item.id}`}>
            <CardBlog {...item} />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default RecentPost
