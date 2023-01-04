import { ListItem, ListProps, UnorderedList } from '@chakra-ui/react'

// Components
import Social from '@components/Social'

type ListSocialType = {
  value: number
  src: string
  alt: string
  link: string
}

interface ListSocialProps extends ListProps {
  listSocial: ListSocialType[]
}

const ListSocial = ({ listSocial, ...rest }: ListSocialProps) => {
  return (
    <UnorderedList
      display="flex"
      gap="18px"
      justifyContent="flex-start"
      alignItems="center"
      marginLeft="0px"
      {...rest}
    >
      {listSocial.map((item) => (
        <ListItem key={`social-${item.value}`} listStyleType="none">
          <Social key={item.value} {...item} />
        </ListItem>
      ))}
    </UnorderedList>
  )
}

export default ListSocial
