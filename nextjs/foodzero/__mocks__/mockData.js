export const AVATAR_MOCK =
  'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fjohn-doe.webp?alt=media&token=6963f744-1ab8-4b09-971d-2486cd5375bf'

export const PRICE_LIST_MOCK = {
  name: 'Deep Sea Snow White Cod Fillet',
  price: 20,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

export const CARD_BLOG = {
  imageUrl:
    'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FFeature%20Image.webp?alt=media&token=0a725961-6c86-4dcd-ab48-e5d7e2eb48fd',
  title: 'Fruit and vegetables and protection against diseases',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'Fashion',
  srcAvatar: AVATAR_MOCK,
  name: 'Julie Christie',
  date: '2022-12-06T23:29:35.000Z',
  comments: 2,
}

export const CARD_FEATURE = {
  title: 'Premium Quality',
  imageUrl:
    'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FCircleIcon.webp?alt=media&token=1df373f3-27a3-45f6-82fa-d997c47c718f',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
}

export const CARD_CATEGORY = {
  href: '/',
  category: 'Starters',
  imageUrl:
    'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fcategory.webp?alt=media&token=4e7dcf6c-2a66-4695-917d-af1d578d9a30',
}

export const USERS_MOCK = [
  {
    id: 'gff1',
    email: 'foodzero@gmail.com',
    password: '123456789',
    reservations: [],
  },
]

export const QUOTE_MOCK = [
  {
    id: '1',
    authorName: 'John Doe',
    job: 'Blogger',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus impedient. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fjohn-doe.webp?alt=media&token=6963f744-1ab8-4b09-971d-2486cd5375bf',
  },
  {
    id: '2',
    authorName: 'Julie Christie',
    job: 'Blogger',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus impedient. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet1.',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Funnamed.webp?alt=media&token=f2607e25-62ae-4ed9-9f53-bb76e6f830fb',
  },
  {
    id: '3',
    authorName: 'Dianne Russell',
    job: 'Blogger',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus impedient. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet2.',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fcute-avatar.webp?alt=media&token=9d70884c-e075-4f36-bf67-b196493badb8',
  },
]

export const OUR_MENU_MOCK = [
  {
    id: '1',
    name: 'Deep Sea Snow White Cod Fillet',
    price: 20,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1.',
  },
  {
    id: '2',
    name: 'Steak With Rosemary Butter',
    price: 22,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit2.',
  },
  {
    id: '3',
    name: 'Cucumber Salad',
    price: 18,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit3.',
  },
  {
    id: '4',
    name: 'Natural Wine Pairing',
    price: 90,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit4.',
  },
]

export const BLOG_SECTION_MOCK = [
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FFeature%20Image.webp?alt=media&token=766a34ea-32e0-40e7-90e6-299f9af22eb1',
    title: 'Fruit and vegetables and protection against diseases',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1.',
    category: 'Fashion',
    srcAvatar:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fjulie.webp?alt=media&token=c429d5f2-6f41-4233-970b-b2739746f7f1',
    name: 'Julie Christies',
    date: '2021-10-17T23:29:35.000Z',
    comments: 2,
    id: '1',
  },
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fasparagus.webp?alt=media&token=d56ab468-1479-4181-844d-f5b231742244',
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit2.',
    category: 'Fashion',
    srcAvatar:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fdianne.webp?alt=media&token=ce3d7213-72ce-4caa-b43c-f6f07bb3b5b7',
    name: 'Dianne Russell',
    date: '2021-10-17T23:29:35.000Z',
    comments: 2,
    id: '2',
  },
]

export const MENU_MOCK = {
  id: '1',
  ourMenu: OUR_MENU_MOCK,
  starters: OUR_MENU_MOCK,
  mains: OUR_MENU_MOCK,
  pastriesAndDrinks: OUR_MENU_MOCK,
}
