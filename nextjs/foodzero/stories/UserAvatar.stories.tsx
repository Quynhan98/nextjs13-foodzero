import { ComponentMeta, ComponentStory } from '@storybook/react'

// Mocks
import { AVATAR_MOCK } from '@mocks/mockData'

// Components
import UserAvatar from '@components/UserAvatar'

export default {
  title: 'Components/UserAvatar',
  component: UserAvatar,
} as ComponentMeta<typeof UserAvatar>

const Template: ComponentStory<typeof UserAvatar> = (args) => (
  <UserAvatar {...args} />
)

export const Avatar = Template.bind({})
Avatar.args = {
  src: AVATAR_MOCK,
  name: 'John Doe',
  job: 'Bloger',
}
