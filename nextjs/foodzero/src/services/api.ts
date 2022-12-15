// Constants
import { BASE_API_URL, BASE_URL } from '@constants/index'

export const fetcherInstance = async (url: string) => {
  const response = await fetch(`${BASE_URL}${url}`)

  return response.json()
}

export const fetcherInstanceAPI = async (url: string) => {
  const response = await fetch(`${BASE_API_URL}${url}`)

  return response.json()
}
