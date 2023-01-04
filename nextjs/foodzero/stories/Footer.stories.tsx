import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Footer from '@components/Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => {
  return <Footer />
}

export const Default = Template.bind({})
