import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import SelectField from '@components/SelectField'

// Constants
import { NUMBER_OF_PERSON, RESERVATION_TIME } from '@constants/index'

export default {
  title: 'Components/SelectField',
  component: SelectField,
} as ComponentMeta<typeof SelectField>

const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  options: RESERVATION_TIME,
}

export const Secondary = Template.bind({})
Secondary.args = {
  options: NUMBER_OF_PERSON,
}
