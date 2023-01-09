// Mocks
import { CARD_BLOG } from '@mocks/mockData'

// Components
import CardBlog from '@components/CardBlog'

export default {
  title: 'Components/CardBlog',
  component: CardBlog,
}

export const Default = {
  args: {
    maxW: '792px',
    ...CARD_BLOG,
  },
}
