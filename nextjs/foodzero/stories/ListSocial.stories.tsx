// Components
import ListSocial from '@components/ListSocial'

// Constants
import { SOCIAL_LIST } from '@constants/index'

export default {
  title: 'Components/ListSocial',
  component: ListSocial,
  parameters: {
    backgrounds: {
      default: 'background',
      values: [{ name: 'background', value: '#233000' }],
    },
  },
}

export const Default = {
  args: {
    listSocial: SOCIAL_LIST,
  },
}
