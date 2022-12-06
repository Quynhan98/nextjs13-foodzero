import { ComponentMeta, ComponentStory } from '@storybook/react'

// Mocks
import { AVATAR_MOCK } from '@mocks/mockData'

// Components
import BlogAvatar from '@components/BlogAvatar'

export default {
  title: 'Component/BlogAvatar',
  component: BlogAvatar,
} as ComponentMeta<typeof BlogAvatar>

const Template: ComponentStory<typeof BlogAvatar> = (args) => (
  <BlogAvatar {...args} />
)

export const Avatar = Template.bind({})
Avatar.args = {
  src: AVATAR_MOCK,
  name: 'Julie Christie',
  date: '2022-12-06T23:29:35.000Z',
  numberOfComments: 2,
}
