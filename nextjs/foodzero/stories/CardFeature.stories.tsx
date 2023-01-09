// Mocks
import { CARD_FEATURE } from '@mocks/mockData'

// Components
import CardFeature from '@components/CardFeature'

export default {
  title: 'Components/CardFeature',
  component: CardFeature,
}

export const Default = {
  args: {
    ...CARD_FEATURE,
  },
}
