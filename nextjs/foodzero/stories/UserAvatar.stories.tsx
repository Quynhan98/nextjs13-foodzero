// Mocks
import { AVATAR_MOCK } from '@mocks/mockData'

// Components
import UserAvatar from '@components/UserAvatar'

export default {
  title: 'Components/UserAvatar',
  component: UserAvatar,
}

export const Avatar = {
  args: {
    src: AVATAR_MOCK,
    name: 'John Doe',
    job: 'Bloger',
  },
}
