// Components
import Contact from '@components/Contact'

// Constants
import { CONTACT } from '@constants/index'

export default {
  title: 'Components/Contact',
  component: Contact,
  parameters: {
    backgrounds: {
      default: 'zinnwalditeBrown',
      values: [{ name: 'zinnwalditeBrown', value: '#233000' }],
    },
  },
}

export const Primary = {
  args: {
    ...CONTACT,
  },
}

export const Secondary = {
  args: {
    ...CONTACT,
    isShowIcon: true,
  },
}
