import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Center } from '@chakra-ui/react'

// Components
import Contact from '@components/Contact'

// Constants
import { CONTACT } from '@constants/index'

export default {
  title: 'Components/Contact',
  component: Contact,
} as ComponentMeta<typeof Contact>

const Template: ComponentStory<typeof Contact> = (args) => (
  <Center backgroundColor="zinnwalditeBrown" height="100vh">
    <Contact {...args} />{' '}
  </Center>
)

export const Primary = Template.bind({})
Primary.args = {
  ...CONTACT,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...CONTACT,
  isShowIcon: true,
}
