import { memo } from 'react'
import { Box, BoxProps, ListItem, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'

type NavigationType = {
  value: number
  name: string
  href: string
}

interface NavigationProps extends BoxProps {
  navList: NavigationType[]
}

const Navigation = ({ navList, ...rest }: NavigationProps) => {
  return (
    <Box as="nav" {...rest}>
      <UnorderedList
        display="flex"
        flexDirection="column"
        gap={{ base: '15px', md: '28px' }}
      >
        {navList.map((obj) => (
          <ListItem
            key={obj.value}
            color="white"
            textTransform="uppercase"
            fontSize={{ base: '26px', md: '66px' }}
            lineHeight={{ base: '30px', md: '82px' }}
            fontWeight="bold"
          >
            <Link href={obj.href}>{obj.name}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default memo(Navigation)
