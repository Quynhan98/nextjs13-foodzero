import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Center } from '@chakra-ui/react'

// components
import Social from '@components/Social'

export default {
  title: 'Component/Social',
  component: Social,
} as ComponentMeta<typeof Social>

const Template: ComponentStory<typeof Social> = (args) => (
  <Center backgroundColor="zinnwalditeBrown" height="100vh">
    <Social {...args} />
  </Center>
)

export const Instagram = Template.bind({})
Instagram.args = {
  src: '/images/instagram.webp',
  alt: 'Instagram',
  link: '/',
}

export const Twitter = Template.bind({})
Twitter.args = {
  src: '/images/twitter.webp',
  alt: 'Twitter',
  link: '/',
}

export const Facebook = Template.bind({})
Facebook.args = {
  src: '/images/facebook.webp',
  alt: 'Facebook',
  link: '/',
}

export const Youtube = Template.bind({})
Youtube.args = {
  src: '/images/youtube.webp',
  alt: 'youtube',
  link: '/',
}
