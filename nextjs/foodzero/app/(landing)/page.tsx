import { notFound } from 'next/navigation'
import React from 'react'

// Services
import { fetcherInstance } from '@services/api'

// Constants
import {
  MENU_ENDPOINT,
  POSTS_ENDPOINT,
  // SERVER_ERROR,
} from '@constants/index'

// Types
import { IPost } from '@self-types/Post'
import { IMenu } from '@self-types/Menu'

import HomePage from './HomePage'

async function getData() {
  const menu: IMenu = await fetcherInstance({
    endpoint: MENU_ENDPOINT,
    fetchingMethod: 'SSR',
  })

  const posts: IPost[] = await fetcherInstance({
    endpoint: POSTS_ENDPOINT,
    fetchingMethod: 'SSR',
  })

  return {
    props: {
      menu: menu.ourMenu,
      posts,
    },
  }
}

export default async function Home() {
  const response = await getData()

  const { menu, posts } = response.props

  if (!menu || !posts || menu.length <= 0 || posts.length <= 0) {
    notFound()
  }

  const data = JSON.stringify(response.props)

  return <HomePage contents={data} />
}
