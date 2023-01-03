import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box } from '@chakra-ui/react'

// Components
import Header from '@components/Header'

export default {
  title: 'Component/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => {
  return (
    <Box backgroundColor="zinnwalditeBrown" height="100vh">
      <Header />
    </Box>
  )
}

export const Default = Template.bind({})
