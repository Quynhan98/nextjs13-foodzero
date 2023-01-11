// Components
import CardReview from '@components/CardReview'

// Mocks
import { QUOTE_MOCK } from '@mocks/mockData'

export default {
  title: 'Components/CardReview',
  component: CardReview,
}

export const Default = {
  args: {
    maxW: '1644px',
    quotes: QUOTE_MOCK,
  },
}
