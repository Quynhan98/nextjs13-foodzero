export const NAV_LIST = [
  {
    value: 1,
    name: 'Home',
    href: '/',
  },
  {
    value: 2,
    name: 'Menu',
    href: '/menu',
  },
  {
    value: 3,
    name: 'About',
    href: '/about',
  },
  {
    value: 4,
    name: 'Contact',
    href: '/contact',
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
  USER_SESSION: 'userSession',
}

export const FEATURES_SECTION = [
  {
    id: '1',
    title: 'Premium Quality',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FCircleIcon.webp?alt=media&token=1df373f3-27a3-45f6-82fa-d997c47c718f',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
  },
  {
    id: '2',
    title: 'Seasonal Vegetables',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FCarrotIcon.webp?alt=media&token=4a46acaf-1445-4279-a269-19d2e9410c6e',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu1',
  },
  {
    id: '3',
    title: 'Fresh Fruit',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FlemonIcon.webp?alt=media&token=93224c37-decd-47bd-bc23-77016b87afe5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
  },
]

export const CATEGORY_SECTION = [
  {
    id: '1',
    href: '/menu',
    category: 'Starters',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fcategory.webp?alt=media&token=4e7dcf6c-2a66-4695-917d-af1d578d9a30',
  },
  {
    id: '2',
    href: '/menu',
    category: 'Mains',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FbakedRibs.webp?alt=media&token=73258243-cb2a-4646-8e4a-62a78c893c8b',
  },
  {
    id: '3',
    href: '/menu',
    category: 'Soups',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fsoup.webp?alt=media&token=07af9c6d-bee4-42e3-a8e8-5bd22397ff08',
  },
]

export const COUNTRY_CODE = '+8'

export const LEADER_SHIP = {
  restaurantManager: {
    name: 'Carson Hugn',
    avatar: '/images/managerAvatar.webp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl.',
  },
  executiveChef: {
    name: 'Jane Cooper',
    avatar: '/images/executiveChefAvatar.webp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.',
  },
}

export const SOPHISTICATED_PROCESS = {
  stepOne: {
    title: 'Slice',
    imageUrl: '/images/splitRibs.webp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.',
  },
  stepTwo: {
    title: 'Pickled',
    imageUrl: '/images/marinatedRibs.webp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.',
  },
  stepThree: {
    title: 'Bake  ',
    imageUrl: '/images/grilledRibs.webp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.',
  },
}

export const INTRO_VIDEO =
  'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FIntro%20Templates%20For%20Youtube%20Cooking%20Chan%20(You2Audio.Com).mp4?alt=media&token=52d3ef27-e3f9-467b-83f0-8d3e6ca250c7'
