import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import SelectField from '@components/SelectField'

// Constants
import { NUMBER_OF_PERSON, RESERVATION_TIME } from '@constants/index'

export default {
  title: 'Component/SelectField',
  component: SelectField,
} as ComponentMeta<typeof SelectField>

const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  listOption: RESERVATION_TIME,
}

export const Secondary = Template.bind({})
Secondary.args = {
  listOption: NUMBER_OF_PERSON,
}
