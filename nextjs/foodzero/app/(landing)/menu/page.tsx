import { notFound } from 'next/navigation'

// Constants
import { MENU_ENDPOINT } from '@constants/index'

// Services
import { fetcherInstance } from '@services/api'

// Types
import { IMenu } from '@self-types/Menu'

import MenuPage from './MenuPage'

async function getData() {
  const menu: IMenu = await fetcherInstance({
    endpoint: MENU_ENDPOINT,
    fetchingMethod: 'SSR',
  })

  return {
    props: {
      menu,
    },
  }
}

export default async function Menu() {
  const response = await getData()

  const { menu } = response.props

  if (!menu || Object.keys(menu).length === 0) {
    notFound()
  }

  const data = JSON.stringify(response.props)

  return <MenuPage content={data} />
}
