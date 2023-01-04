import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import LoadingIndicator from '@components/LoadingIndicator'

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>

const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: 'xl',
}
