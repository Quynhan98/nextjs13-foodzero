import { ComponentMeta, ComponentStory } from '@storybook/react'

// Mocks
import { CARD_FEATURE } from '@mocks/mockData'

// Components
import CardFeature from '@components/CardFeature'

export default {
  title: 'Component/CardFeature',
  component: CardFeature,
} as ComponentMeta<typeof CardFeature>

const Template: ComponentStory<typeof CardFeature> = (args) => (
  <CardFeature {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...CARD_FEATURE,
}
