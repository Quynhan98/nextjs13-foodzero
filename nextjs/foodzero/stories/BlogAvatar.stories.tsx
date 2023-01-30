// Mocks
import { AVATAR_MOCK } from '@mocks/mockData'

// Components
import BlogAvatar from '@components/BlogAvatar'

export default { title: 'Components/BlogAvatar', component: BlogAvatar }

export const Avatar = {
  args: {
    src: AVATAR_MOCK,
    name: 'Julie Christie test ksdgvbbsdfh',
    date: '2022-12-06T23:29:35.000Z',
    numberOfComments: 2,
  },
}
