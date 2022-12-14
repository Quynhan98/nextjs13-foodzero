import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Center } from '@chakra-ui/react'

// Components
import ListSocial from '@components/ListSocial'

// Constants
import { SOCIAL_LIST } from '@constants/index'

export default {
  title: 'Component/ListSocial',
  component: ListSocial,
} as ComponentMeta<typeof ListSocial>

const Template: ComponentStory<typeof ListSocial> = (args) => (
  <Center backgroundColor="zinnwalditeBrown" height="100vh">
    <ListSocial {...args} />
  </Center>
)

export const Default = Template.bind({})
Default.args = {
  listSocial: SOCIAL_LIST,
}
