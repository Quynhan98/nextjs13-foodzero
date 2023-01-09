// Mocks
import { PRICE_LIST_MOCK } from '@mocks/mockData'

// Components
import PriceList from '@components/PriceList'

export default {
  title: 'Components/PriceList',
  component: PriceList,
}

export const Default = {
  args: {
    ...PRICE_LIST_MOCK,
    maxW: '792px',
  },
}
