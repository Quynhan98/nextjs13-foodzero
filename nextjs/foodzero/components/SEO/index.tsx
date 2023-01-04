import React from 'react'
import Head from 'next/head'

interface Props {
  description?: string
  title?: string
  urlLink?: string
}

const SEO = ({ description, title, urlLink }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={urlLink} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="icon" href="/images/logo.webp" />
    </Head>
  )
}

export default SEO
