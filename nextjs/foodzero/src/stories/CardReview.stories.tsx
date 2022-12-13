import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import CardReview from '@components/CardReview'

// Mocks
import { QUOTE_MOCK } from '@mocks/mockData'

export default {
  title: 'Component/CardReview',
  component: CardReview,
} as ComponentMeta<typeof CardReview>

const Template: ComponentStory<typeof CardReview> = (args) => (
  <CardReview maxW="1500px" {...args} />
)

export const Default = Template.bind({})
Default.args = {
  quotes: QUOTE_MOCK,
}
