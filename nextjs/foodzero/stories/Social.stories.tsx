// components
import Social from '@components/Social'

export default {
  title: 'Components/Social',
  component: Social,
  parameters: {
    backgrounds: {
      default: 'zinnwalditeBrown',
      values: [{ name: 'zinnwalditeBrown', value: '#233000' }],
    },
  },
}

export const Instagram = {
  args: {
    src: '/images/instagram.webp',
    alt: 'Instagram',
    link: '/',
  },
}

export const Twitter = {
  args: {
    src: '/images/twitter.webp',
    alt: 'Twitter',
    link: '/',
  },
}

export const Facebook = {
  args: {
    src: '/images/facebook.webp',
    alt: 'Facebook',
    link: '/',
  },
}

export const Youtube = {
  args: {
    src: '/images/youtube.webp',
    alt: 'youtube',
    link: '/',
  },
}
