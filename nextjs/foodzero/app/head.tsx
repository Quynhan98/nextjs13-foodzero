import Script from 'next/script'

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

      <Script
        id="my-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVSQVJS');`,
        }}
      />
    </>
  )
}
