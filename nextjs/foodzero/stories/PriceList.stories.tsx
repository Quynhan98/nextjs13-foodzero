import { ComponentMeta, ComponentStory } from '@storybook/react'

// Mocks
import { PRICE_LIST_MOCK } from '@mocks/mockData'

// Components
import PriceList from '@components/PriceList'

export default {
  title: 'Components/PriceList',
  component: PriceList,
} as ComponentMeta<typeof PriceList>

const Template: ComponentStory<typeof PriceList> = (args) => (
  <PriceList maxW="792px" {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...PRICE_LIST_MOCK,
}
