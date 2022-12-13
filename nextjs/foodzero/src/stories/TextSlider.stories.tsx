import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import TextSlider from '@components/TextSlider'

// Mocks
import { QUOTE_MOCK } from '@mocks/mockData'

export default {
  title: 'Component/TextSlider',
  component: TextSlider,
} as ComponentMeta<typeof TextSlider>

const Template: ComponentStory<typeof TextSlider> = (args) => (
  <TextSlider maxW="1500px" {...args} />
)

export const Default = Template.bind({})
Default.args = {
  quotes: QUOTE_MOCK,
}
