import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Center } from '@chakra-ui/react'

// Components
import OpenTime from '@components/OpenTime'

// Constants
import { OPEN_TIME } from '@constants/index'

export default {
  title: 's/OpenTime',
  component: OpenTime,
} as ComponentMeta<typeof OpenTime>

const Template: ComponentStory<typeof OpenTime> = (args) => (
  <Center backgroundColor="zinnwalditeBrown" height="100vh">
    <OpenTime {...args} />{' '}
  </Center>
)

export const Default = Template.bind({})
Default.args = {
  ...OPEN_TIME,
}
