import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Center } from '@chakra-ui/react'

// Components
import Navigation from '@components/Navigation'

// Constants
import { NAV_LIST } from '@constants/index'

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Center backgroundColor="zinnwalditeBrown" height="100vh">
    <Navigation {...args} />
  </Center>
)

export const Default = Template.bind({})
Default.args = {
  navList: NAV_LIST,
}
