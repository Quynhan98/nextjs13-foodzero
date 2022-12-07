import { ComponentMeta, ComponentStory } from '@storybook/react'

// Mocks
import { CARD_CATEGORY } from '@mocks/mockData'

// Components
import CardCategory from '@components/CardCategory'

export default {
  title: 'Component/CardCategory',
  component: CardCategory,
} as ComponentMeta<typeof CardCategory>

const Template: ComponentStory<typeof CardCategory> = (args) => (
  <CardCategory {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...CARD_CATEGORY,
}
