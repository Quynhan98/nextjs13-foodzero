import { BASE_API_URL, SERVER_ERROR } from '@constants/index'

export const addToBooking = async <T,>(
  requestData: T,
  url: string,
): Promise<T> => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  }

  try {
    const response = await fetch(`${BASE_API_URL}${url}`, config)
    return response.json()
  } catch (error) {
    throw SERVER_ERROR
  }
}
