export const NAV_LIST = [
  {
    value: 1,
    name: 'Home',
    href: '/',
  },
  {
    value: 2,
    name: 'Menu',
    href: '/',
  },
  {
    value: 3,
    name: 'About',
    href: '/',
  },
  {
    value: 4,
    name: 'Contact',
    href: '/',
  },
]

export const SOCIAL_LIST = [
  {
    value: 1,
    src: '/images/instagram.webp',
    alt: 'Instagram',
    link: '/',
  },
  {
    value: 2,
    src: '/images/twitter.webp',
    alt: 'Twitter',
    link: '/',
  },
  {
    value: 3,
    src: '/images/facebook.webp',
    alt: 'Facebook',
    link: '/',
  },
  {
    value: 4,
    src: '/images/youtube.webp',
    alt: 'youtube',
    link: '/',
  },
]

export const CONTACT = {
  phoneNumber: '+86 852 346 000',
  email: 'info@foodzero.com',
  address: '1959 Sepulveda Blvd. Culver City, CA, 90230',
}

export const OPEN_TIME = {
  openTime: 'Sunday - Friday',
  businessHours: [
    { meal: 'Brunch', time: '11:00–12:00' },
    { meal: 'Lunch', time: '13:00–17:00' },
    { meal: 'Dinner', time: '18:00–20:00' },
  ],
}

export enum BREAKPOINTS {
  SMALL = '(max-width: 320px)',
  MEDIUM = '(max-width: 768px)',
  LARGE = '(max-width: 960px)',
  EXTRA_LARGE = '(max-width: 1200px)',
}

export const RESERVATION_TIME = [
  '11:00 am',
  '12:00 am',
  '13:00 pm',
  '14:00 pm',
  '15:00 pm',
  '16:00 pm',
  '17:00 pm',
  '18:00 pm',
  '19:00 pm',
]

export const NUMBER_OF_PERSON = [
  '1 Person',
  '2 Person',
  '3 Person',
  '4 Person',
  '5 Person',
  '6 Person',
  '7 Person',
  '8 Person',
  '9 Person',
  '10 Person',
]

export const LOCAL_STORAGE_KEY = {
  USER_ID: 'userId',
  IS_TOKEN: 'isToken',
}
