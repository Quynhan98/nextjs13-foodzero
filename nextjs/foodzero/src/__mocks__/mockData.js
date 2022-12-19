export const AVATAR_MOCK =
  'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fjohn-doe.webp?alt=media&token=6963f744-1ab8-4b09-971d-2486cd5375bf'

export const PRICE_LIST_MOCK = {
  name: 'Deep Sea Snow White Cod Fillet',
  price: 20,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
}

export const CARD_BLOG = {
  imageUrl:
    'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2FFeature%20Image.webp?alt=media&token=766a34ea-32e0-40e7-90e6-299f9af22eb1',
  title: 'Fruit and vegetables and protection against diseases',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'Fashion',
  srcAvatar: AVATAR_MOCK,
  name: 'Julie Christie',
  date: '2022-12-06T23:29:35.000Z',
  numberOfComments: 2,
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
    'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fcategory.webp?alt=media&token=9f307d7c-b242-479d-943a-4ae672ac601e',
}

export const USERS_MOCK = [
  {
    id: 'gff1',
    email: 'foodzero@gmail.com',
    password: '123456789',
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
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Funnamed.webp?alt=media&token=72862fa3-6567-4043-aab0-cc449b30e602',
  },
  {
    id: '3',
    authorName: 'Dianne Russell',
    job: 'Blogger',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus impedient. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet2.',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/image-blog-155e2.appspot.com/o/foodzero%2Fcute-avatar.webp?alt=media&token=7b6d918e-3dec-43cf-a4bd-70afdbdc63e0',
  },
]

export const OUR_MENU_MOCK = [
  PRICE_LIST_MOCK,
  PRICE_LIST_MOCK,
  PRICE_LIST_MOCK,
  PRICE_LIST_MOCK,
]

export const FEATURES_MOCK = [CARD_FEATURE, CARD_FEATURE, CARD_FEATURE]

export const BLOG_SECTION_MOCK = [CARD_BLOG, CARD_BLOG]

export const CATEGORY_SECTION_MOCK = [
  CARD_CATEGORY,
  CARD_CATEGORY,
  CARD_CATEGORY,
]
