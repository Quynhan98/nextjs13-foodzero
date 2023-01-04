import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Picker from '@components/Picker'

export default {
  title: 'Components/Picker',
  component: Picker,
} as ComponentMeta<typeof Picker>

const Template: ComponentStory<typeof Picker> = (args) => <Picker {...args} />

export const Default = Template.bind({})
Default.args = {
  isMinDate: true,
  isMaxDate: true,
  width: '800px',
}
