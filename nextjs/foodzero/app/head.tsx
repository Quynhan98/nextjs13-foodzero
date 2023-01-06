import { BASE_URL } from '@constants/index'

export default function Head() {
  return (
    <>
      <title>Foodzero</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content="Foodzero" />
      <meta name="description" content="This is a food restaurant" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Foodzero" />
      <meta property="og:description" content="This is a food restaurant" />
      <meta property="og:url" content={BASE_URL} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="Foodzero" />
      <meta
        property="twitter:description"
        content="This is a food restaurant"
      />
      <link rel="icon" href="/images/logo.webp" />
    </>
  )
}
