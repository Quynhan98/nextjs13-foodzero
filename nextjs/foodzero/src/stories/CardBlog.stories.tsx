import { ComponentMeta, ComponentStory } from '@storybook/react'

// Mocks
import { CARD_BLOG } from '@mocks/mockData'

// Components
import CardBlog from '@components/CardBlog'

export default {
  title: 'Component/CardBlog',
  component: CardBlog,
} as ComponentMeta<typeof CardBlog>

const Template: ComponentStory<typeof CardBlog> = (args) => (
  <CardBlog maxW="792px" {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...CARD_BLOG,
}
