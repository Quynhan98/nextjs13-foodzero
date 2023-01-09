// Mocks
import { CARD_CATEGORY } from '@mocks/mockData'

// Components
import CardCategory from '@components/CardCategory'

export default {
  title: 'Components/CardCategory',
  component: CardCategory,
}

export const Default = {
  args: {
    ...CARD_CATEGORY,
  },
}
