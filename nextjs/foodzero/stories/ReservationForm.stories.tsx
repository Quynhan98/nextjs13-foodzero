import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box } from '@chakra-ui/react'

// Components
import ReservationForm from '@components/ReservationForm'

export default {
  title: 'Components/ReservationForm',
  component: ReservationForm,
} as ComponentMeta<typeof ReservationForm>

const Template: ComponentStory<typeof ReservationForm> = (args) => (
  <Box
    maxW="1844px"
    padding={{ base: '15px', md: '100px' }}
    backgroundColor="alabaster"
  >
    <ReservationForm {...args} />
  </Box>
)

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  isShowFullField: true,
}
